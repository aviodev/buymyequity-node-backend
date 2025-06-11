const { uuid } = require("uuidv4");
const db = require("../db/db.connector");
const Startup = db.Startup;
const Video = db.Video;
const Thumbnails = db.Thumbnail;
const Logo = db.Logo;
const Document = db.Document;
const Pancard = db.PanCardDoc;
const CompanyTypeDoc = db.CompanyTypeDoc;
const BusinessProofDoc = db.BusinessProofDoc;
const OwnershipDoc = db.OwnershipDoc;
const PaymentDetails = db.PaymentDetails;
const { createPdfInvoice } = require("../pdfgenerator/createpdf");
const Invoice = db.Invoice;
exports.createStartup = (req, res) => {
  if (
    !req.body.email ||
    !req.body.tradename ||
    !req.body.companyname ||
    !req.body.businessmodel ||
    !req.body.yest ||
    !req.body.country ||
    !req.body.state ||
    !req.body.city
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a User
  const startup = {
    tradename: req.body.tradename,
    companyname: req.body.companyname,
    businessmodel: req.body.businessmodel,
    website: req.body.website,
    yest: req.body.yest,
    email: req.body.email,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    industry: req.body.industry,
    stage: req.body.stage,
    sector: req.body.sector,
    offering: req.body.offering,
    description: req.body.description,
  };
  // Save user in the database
  Startup.create(startup)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Startup.",
      });
    });
};

exports.uploadFiles = (req, res) => {
  let error = false;
  let message = "";
  if (req.body.startup_id == null) {
    return res.status(400).send({
      message: "Startup id can not be empty!",
    });
  }
  // console.log(req.files);
  if (!req.files.pancard && !req.files.document && !req.files.businessproof) {
    return res.status(400).send({
      message: "Required Files can't be empty!",
    });
  }
  const startup_id = req.body.startup_id;
  // console.log(startup_id);
  if (req.files.video && !error) {
    const video = req.files.video;
    Video.create({
      submitted_by: startup_id,
      file: video,
      filename: `${startup_id}.${uuid()}.${video.name.split(".")[1]}`,
      type: video.mimetype,
    })
      .then((data) => {
        //    console.log(data);
      })
      .catch((err) => {
        console.log(err);
        error = true;
        message = err.message;
      });
  }
  if (req.files.logo && !error) {
    const logo = req.files.logo;
    // console.log("File type", logo.type);

    Logo.create({
      submitted_by: startup_id,
      file: logo,
      filename: `${startup_id}.${uuid()}.${logo.name.split(".")[1]}`,
      type: logo.mimetype,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        error = true;
        message = err.message;
      });
  }
  if (req.files.thumbnail && !error) {
    const thumbnail = req.files.thumbnail;
    Thumbnails.create({
      submitted_by: startup_id,
      file: thumbnail,
      filename: `${startup_id}.${uuid()}.${thumbnail.name.split(".")[1]}`,
      type: thumbnail.mimetype,
    })
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
        error = true;
        message = err.message;
      });
  }
  if (req.files.document && !error) {
    const document = req.files.document;
    Document.create({
      submitted_by: startup_id,
      file: document,
      filename: `${startup_id}.${uuid()}.${document.name.split(".")[1]}`,
      type: document.mimetype,
    })
      .then((data) => {
        //   console.log(data);
      })
      .catch((err) => {
        console.log(err);
        error = true;

        message = err.message;
      });
  }
  if (req.files.pancard && !error) {
    const pancard = req.files.pancard;
    console.log("File type", pancard.type);
    Pancard.create({
      submitted_by: startup_id,
      file: pancard,
      filename: `${startup_id}.${uuid()}.${pancard.name.split(".")[1]}`,
      type: pancard.mimetype,
    })
      .then((data) => {
        //   console.log(data);
      })
      .catch((err) => {
        console.log(err);
        error = true;
        message = err.message;
      });
  }
  if (req.files.companytype && !error) {
    const companytype = req.files.companytype;
    CompanyTypeDoc.create({
      submitted_by: startup_id,
      file: companytype,
      filename: `${startup_id}.${uuid()}.${companytype.name.split(".")[1]}`,
      type: companytype.mimetype,
    })

      .then((data) => {
        //   console.log(data);
      })
      .catch((err) => {
        console.log(err);
        error = true;
        message = err.message;
      });
  }
  if (req.files.businessproof && !error) {
    const businessproof = req.files.businessproof;
    BusinessProofDoc.create({
      submitted_by: startup_id,
      file: businessproof,
      filename: `${startup_id}.${uuid()}.${businessproof.name.split(".")[1]}`,
      type: businessproof.mimetype,
    })

      .then((data) => {
        //   console.log(data);
      })
      .catch((err) => {
        console.log(err);
        error = true;
        message = err.message;
      });
  }
  if (req.files.ownership && !error) {
    const ownership = req.files.ownership;
    OwnershipDoc.create({
      submitted_by: startup_id,
      file: ownership,
      filename: `${startup_id}.${uuid()}.${ownership.name.split(".")[1]}`,
      type: ownership.mimetype,
    })

      .then((data) => {
        //   console.log(data);
      })
      .catch((err) => {
        console.log(err);
        error = true;
        message = err.message;
      });
  }

  if (error) {
    res.status(500).send({
      message: message || "Some error occurred while creating the Startup.",
    });
  } else {
    res.status(200).send({
      message: "Files uploaded successfully",
    });
  }
};

exports.setStartupPaymentStatus = (req, res) => {
  //  console.log(req.body);
  if (!req.body.payee_name && !req.body.payee_number && !req.amount) {
    return res.status(400).send({
      message: "Some Payment Details fields are missing!",
    });
  }
  PaymentDetails.create({
    payee_name: req.body.payee_name,
    payee_number: req.body.payee_number,
    amount: req.body.amount,
    submitted_by: req.body.startup_id,
    payment_id: req.body.payment_id,
  })
    .then((data) => {
      console.log(data.dataValues);
      createTempInvoice(req.body.startup_id, data.dataValues).then(
        (pdfData) => {
          // console.log("Final PDF Data", pdfData);
          res.status(200).type(pdfData.type).send(pdfData.file);
        }
      );
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Payment Update Status.",
      });
    });
};

const createTempInvoice = (startup_id, payment_details) => {
  var details = {};
  return new Promise((resolve, reject) => {
    Startup.findOne({ id: startup_id })
      .then((data) => {
        details = {
          ...details,
          ...data.dataValues,
          ...payment_details,
          invoice_id: payment_details.id,
        };
        createPdfInvoice([details]).then((pdfData) => {
          Invoice.create({
            submitted_by: startup_id,
            file: pdfData,
            filename: `${startup_id}.${uuid()}.pdf`,
            type: "application/pdf",
          })
            .then((data) => {
              resolve(data);
            })
            .catch((err) => {
              reject(err);
            });
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
  return "any";
};

exports.getStartupLogo = (req, res) => {
  Logo.findAll()
    .then((data) => {
      console.log(data);
      console.log(data[0].file);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Startup.",
      });
      console.log(err);
    });
};
