const { Router } = require("express");
const express = require("express");
const configureApp = require("./config");
const App = express();
const connectDB = require("./dbConnection");
const router = require("./routes/Router");

configureApp(App);

const PORT = 8080;
connectDB();

//middleware
App.use(express.json());

App.listen(PORT, () => {
  console.log(`Server started at port on http://localhost:${PORT}`);
  router(App);
});
