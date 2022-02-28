const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const configureApp = (App) => {
  dotenv.config();
  App.use(helmet());
  App.use(morgan("common"));
  App.use(cors());
};

module.exports = configureApp;
