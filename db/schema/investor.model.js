const { uuid } = require("uuidv4");
module.exports = (sequelize, Sequelize) => {
  const Investor = sequelize.define("investor", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    companyname: {
      type: Sequelize.STRING,
    },
  });
  Investor.beforeCreate((investor) => {
    investor.id = uuid();
  });
  return Investor;
};
