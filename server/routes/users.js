const { Router } = require("express");

const ROUTER = new Router();

ROUTER.get("/", (req, res) => {
  res.send("User route is looking good.");
});

module.exports = ROUTER;
