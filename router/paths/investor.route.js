const router = require("express").Router();
const { createInvestor } = require("../../controller/investor.con");
router.post("/create", createInvestor);
module.exports = router;
