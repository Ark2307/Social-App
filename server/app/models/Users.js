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

    city: {
      type: String,
      max: 50,
    },

    state: {
      type: String,
      max: 50,
    },

    country: {
      type: String,
      max: 50,
    },

    relationshipStatus: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userModel);
