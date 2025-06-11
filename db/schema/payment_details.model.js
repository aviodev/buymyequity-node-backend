const { BLOB } = require("sequelize");
const { uuid } = require("uuidv4");

exports.paymentDetailsModel = (sequelize, Sequelize) => {
  const PaymentDetails = sequelize.define("payment_details", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    payee_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    payee_number: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
    },
    payment_id: {
      type: Sequelize.STRING,
    },
  });
  PaymentDetails.beforeCreate((paymentDetails) => {
    paymentDetails.id = uuid();
  });
  PaymentDetails.beforeCreate((paymentDetails) => {
    paymentDetails.status = "pending";
  });
  return PaymentDetails;
};

exports.invoice = (sequelize, Sequelize) => {
  const Invoice = sequelize.define("invoice", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },

    file: {
      type: BLOB("long"),
      allowNull: false,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  Invoice.beforeCreate((invoice) => {
    invoice.id = uuid();
  });
  return Invoice;
};
