const express = require("express");
const configureApp = require("./config");
const App = express();
const connectDB = require("./dbConnection");
const router = require("./routes/Router");
const multer = require("multer");
const { sendResponse } = require("./app/controllers");
const path = require("path");

configureApp(App);

const PORT = 8080;
connectDB();

//path for images
App.use("/images", express.static(path.join(__dirname, "public/images")));

//storage of a file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//use of multer
const upload = multer({ storage });
App.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return sendResponse(res, "", "File Uploaded", true, 200);
  } catch (error) {
    console.log(error);
  }
});

//middleware
App.use(express.json());

App.listen(PORT, () => {
  console.log(`Server started at port on http://localhost:${PORT}`);
  router(App);
});
