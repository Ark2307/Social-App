const userRoute = require("./users");
const authRoute = require("./auth");

const router = (App) => {
  App.use("/api/users", userRoute);
  App.use("/api/auth", authRoute);
};

module.exports = router;
