const router = require("express").Router();
const {
  createStartup,
  uploadFiles,
  getStartupLogo,
  setStartupPaymentStatus,
} = require("../../controller/startup.con");

router.post("/create", createStartup);
router.put("/upload/files", uploadFiles);
router.get("/get/logo", getStartupLogo);
router.post("/payment/details", setStartupPaymentStatus);
module.exports = router;
