const env = process.env.NODE_ENV || "development";
var dbconfig = require("./db/db.config.json");
var envConfig = dbconfig[env];
// add env. config values to process.env
Object.keys(envConfig).forEach((key) => (process.env[key] = envConfig[key]));
