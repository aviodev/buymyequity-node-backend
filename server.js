const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const fileupload = require("express-fileupload");
const chalk = require("chalk");

app.use(cors());
app.use(bodyParser.json({ limit: "100000kb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileupload());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded());
// set port, listen for requests
const PORT = process.env.PORT || 8080;
// setup config helper
const configHelper = require("./configHelper");
// setup db
const db = require("./db/db.connector");
db.sequelize
  .sync()
  .then(() => {
    console.log(chalk.bgGreen.bold(" Database successfully synced "));
  })
  .catch((err) => {
    console.log(err);
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "BME SERVER RUNNING PORT: " + PORT });
});
// setup routes
app.use(require("./router/index.route"));

app.listen(PORT, () => {
  console.log(chalk.bgBlue.bold(" Server is running on port " + PORT + " "));
});
