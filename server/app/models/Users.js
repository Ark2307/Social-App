const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 6,
      max: 18,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      max: 40,
    },

    password: {
      type: String,
      required: true,
      min: 8,
      max: 20,
    },

    profilePic: {
      type: String,
      default: "",
    },

    coverPic: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
      max: 150,
    },

    followers: {
      type: Array,
      default: [],
    },

    following: {
      type: Array,
      default: [],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userModel);
