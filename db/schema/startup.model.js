const { uuid } = require("uuidv4");

module.exports = (sequelize, Sequelize) => {
  const Startup = sequelize.define("startup", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    tradename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    companyname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    businessmodel: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    website: {
      type: Sequelize.STRING,
    },
    yest: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    industry: {
      type: Sequelize.STRING,
    },
    stage: {
      type: Sequelize.STRING,
    },
    sector: {
      type: Sequelize.STRING,
    },
    offering: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });
  Startup.beforeCreate((startup) => {
    startup.id = uuid();
  });
  return Startup;
};
