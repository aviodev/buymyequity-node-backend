const express = require("express");
const app = express();

app.use("/api/v1/investor", require("./paths/investor.route"));
app.use("/api/v1/startup", require("./paths/startup.route"));
module.exports = app;
