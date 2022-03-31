const { Router } = require("express");
const { sendResponse } = require("../app/controllers");
const User = require("../app/models/Users");
const bcrypt = require("bcrypt");

const ROUTER = new Router();

//update user
ROUTER.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      return sendResponse(res, "", "Account has been updated", true, 200);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return sendResponse(res, "", "Not your account to update", false, 403);
  }
});

//delete user
ROUTER.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      return sendResponse(res, "", "Account has been deleted", true, 200);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return sendResponse(res, "", "Not your account", false, 403);
  }
});

//get user
ROUTER.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, createdAt, __v, ...other } = user._doc;
    sendResponse(res, other, "This is the user", true, 200);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//fetch all followers
ROUTER.get("/friend/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.following.map((friendId) => {
        return User.findById(friendId);
      })
    );

    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePic } = friend;
      friendList.push({ _id, username, profilePic });
    });

    sendResponse(res, friendList, "FriendList fetched", true, 200);
  } catch (error) {
    //console.log(error);
    res.status(500).json(error);
  }
});

//follow user
ROUTER.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const userFriend = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!userFriend.followers.includes(req.body.userId)) {
        await userFriend.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        sendResponse(res, "", "User account has been followed", 200, true);
      } else {
        res.status(403).json("You already follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    sendResponse(res, "", "Cannot follow yourself", false, 403);
  }
});

//unfollow user
ROUTER.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const userFriend = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (userFriend.followers.includes(req.body.userId)) {
        await userFriend.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        sendResponse(res, "", "User account has been unfollowed", 200, true);
      } else {
        res.status(403).json("You dont follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    sendResponse(res, "", "Cannot unfollow yourself", false, 403);
  }
});

module.exports = ROUTER;
