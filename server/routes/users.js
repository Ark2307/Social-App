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
ROUTER.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, createdAt, __v, ...other } = user._doc;
    sendResponse(res, other, "This is the user", true, 200);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//follow user
//unfollow user

module.exports = ROUTER;
