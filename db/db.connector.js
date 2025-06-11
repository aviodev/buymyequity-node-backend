const env = process.env;
const Sequelize = require("sequelize");
console.log(env.DB, env.USER, env.PASSWORD);
const sequelize = new Sequelize(env.DB, env.USER, env.PASSWORD, {
  host: env.HOST,
  dialect: env.dialect,
  operatorsAliases: false,
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//defining schemas
const {
  CompanyTypeDoc,
  PanCardDoc,
  BusinessProofDoc,
  OwnershipDoc,
  Video,
  Thumbnail,
  Logo,
} = require("./schema/document.model");
const {
  paymentDetailsModel,
  invoice,
} = require("./schema/payment_details.model");
//db.User = require("./schema/user.model")(sequelize, Sequelize);
db.Investor = require("./schema/investor.model")(sequelize, Sequelize);
db.Startup = require("./schema/startup.model")(sequelize, Sequelize);
db.PaymentDetails = paymentDetailsModel(sequelize, Sequelize);
db.Invoice = invoice(sequelize, Sequelize);
db.PanCardDoc = PanCardDoc(sequelize, Sequelize);
db.CompanyTypeDoc = CompanyTypeDoc(sequelize, Sequelize);
db.BusinessProofDoc = BusinessProofDoc(sequelize, Sequelize);
db.OwnershipDoc = OwnershipDoc(sequelize, Sequelize);
db.Video = Video(sequelize, Sequelize);
db.Thumbnail = Thumbnail(sequelize, Sequelize);
db.Logo = Logo(sequelize, Sequelize);

// defining relations
db.PaymentDetails.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.Video.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.Thumbnail.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.Logo.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.PanCardDoc.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.CompanyTypeDoc.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.BusinessProofDoc.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.OwnershipDoc.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.Video.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.Thumbnail.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.Logo.belongsTo(db.Startup, { foreignKey: "submitted_by" });
db.Invoice.belongsTo(db.Startup, { foreignKey: "submitted_by" });
module.exports = db;
