const { Router, response } = require("express");
const { sendResponse, sendError } = require("../app/controllers");
const User = require("../app/models/Users");
const bcyrpt = require("bcrypt");

const ROUTER = new Router();

//Register User
ROUTER.post("/register", async (req, res) => {
  try {
    //password encryption done here
    const salt = await bcyrpt.genSalt(10);
    const hashedPassword = await bcyrpt.hash(req.body.password, salt);

    //new user registered here
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      description: req.body.description,
    });

    //user sent to mongoDB from here
    const user = await newUser.save();
    sendResponse(res, user, "user added successfully", true, 200);
  } catch (err) {
    return sendError(res, "", err || "unknown error occurred");
  }
});

//LOGIN User
ROUTER.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user does not exist");

    const validPassword = await bcyrpt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return sendError(res, "", "invalid credentials");
    }

    sendResponse(res, user, "Welcome back friend", true, 200);
  } catch (err) {
    return sendError(res, "", err || "unknown error occurred");
  }
});

module.exports = ROUTER;
