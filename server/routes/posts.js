const { Router } = require("express");
const { sendResponse } = require("../app/controllers");
const Post = require("../app/models/Posts");
const User = require("../app/models/Users");

const ROUTER = new Router();

// create a post
ROUTER.post("/create", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    sendResponse(res, savedPost, "Post created", true, 200);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a post
ROUTER.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      sendResponse(res, post, "Post updated", true, 200);
    } else {
      return res.status(403).json("You cannot edit some other Person's Post");
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

// delete a post
ROUTER.delete("/:id", async (req, res) => {
  try {
    if (req.params.id === req.body.userId) {
      await Post.findByIdAndDelete(req.body.userId);
      return sendResponse(res, "", "Post has been deleted", true, 200);
    } else {
      return res.status(403).json("You cannot delete some other Person's Post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// like/dislike a post
ROUTER.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      sendResponse(res, "", "You liked a post", true, 200);
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      sendResponse(res, "", "You disliked a post", true, 200);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// get a post
ROUTER.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    sendResponse(res, post, "Post found", true, 200);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get timeline posts
ROUTER.get("/timeline/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: user._id });
    const visiblePosts = await Promise.all(
      user.following.map((index) => {
        return Post.find({ userId: index });
      })
    );

    sendResponse(
      res,
      userPosts.concat(...visiblePosts),
      "Posts loaded",
      true,
      200
    );
  } catch (error) {
    res.status(500).json(error);
  }
});

//users post
ROUTER.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    sendResponse(res, posts, "post of user loaded", true, 200);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = ROUTER;
