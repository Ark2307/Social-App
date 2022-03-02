const userRoute = require("./users");
const authRoute = require("./auth");
const postRoute = require("./posts");

const router = (App) => {
  App.use("/api/users", userRoute);
  App.use("/api/auth", authRoute);
  App.use("/api/post", postRoute);
};

module.exports = router;
