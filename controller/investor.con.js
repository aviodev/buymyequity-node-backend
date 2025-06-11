const db = require("../db/db.connector");
const Investor = db.Investor;
const Op = db.Sequelize.Op;

exports.createInvestor = (req, res) => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.phone
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a User
  const investor = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    companyname: req.body.companyname,
  };
  // Save user in the database
  Investor.create(investor)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Investor.",
      });
    });
};
