const UserRouter = require("express").Router();
const { createUser, getTestResponse } = require("../../controller/user.con");

UserRouter.post("/create-user", createUser);
UserRouter.get("/get-response", getTestResponse);

module.exports = UserRouter;
