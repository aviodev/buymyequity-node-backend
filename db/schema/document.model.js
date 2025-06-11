const { uuid } = require("uuidv4");

exports.PanCardDoc = (sequelize, Sequelize) => {
  const PanCardDoc = sequelize.define("pan_card_doc", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    file: {
      type: Sequelize.BLOB("long"),
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
    },
  });
  PanCardDoc.beforeCreate((panCardDoc) => {
    panCardDoc.id = uuid();
  });

  return PanCardDoc;
};
exports.CompanyTypeDoc = (sequelize, Sequelize) => {
  const CompanyTypeDoc = sequelize.define("company_type_doc", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    file: {
      type: Sequelize.BLOB("long"),
    },
    type: {
      type: Sequelize.STRING,
    },
  });
  CompanyTypeDoc.beforeCreate((companyTypeDoc) => {
    companyTypeDoc.id = uuid();
  });
  return CompanyTypeDoc;
};

exports.BusinessProofDoc = (sequelize, Sequelize) => {
  const BusinessProofDoc = sequelize.define("business_proof_doc", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    file: {
      type: Sequelize.BLOB("long"),
    },
    type: {
      type: Sequelize.STRING,
    },
  });
  BusinessProofDoc.beforeCreate((businessProofDoc) => {
    businessProofDoc.id = uuid();
  });
  return BusinessProofDoc;
};

exports.OwnershipDoc = (sequelize, Sequelize) => {
  const OwnershipDoc = sequelize.define("ownership_proof_doc", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    file: {
      type: Sequelize.BLOB("long"),
    },
    type: {
      type: Sequelize.STRING,
    },
  });
  OwnershipDoc.beforeCreate((ownershipProofDoc) => {
    ownershipProofDoc.id = uuid();
  });
  return OwnershipDoc;
};

exports.Logo = (sequelize, Sequelize) => {
  const Logo = sequelize.define("logo", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    file: {
      type: Sequelize.BLOB("long"),
    },
    type: {
      type: Sequelize.STRING,
    },
  });
  Logo.beforeCreate((logo) => {
    logo.id = uuid();
  });
  return Logo;
};

exports.Thumbnail = (sequelize, Sequelize) => {
  const Thumbnail = sequelize.define("thumbnail", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    file: {
      type: Sequelize.BLOB("long"),
    },
    type: {
      type: Sequelize.STRING,
    },
  });
  Thumbnail.beforeCreate((thumbnail) => {
    thumbnail.id = uuid();
  });
  return Thumbnail;
};

exports.Video = (sequelize, Sequelize) => {
  const Video = sequelize.define("video", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    file: {
      type: Sequelize.BLOB("long"),
    },
    type: {
      type: Sequelize.STRING,
    },
  });
  Video.beforeCreate((video) => {
    video.id = uuid();
  });
  return Video;
};
