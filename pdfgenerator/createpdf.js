const pdf = require("pdf-creator-node");
const fs = require("fs");
var temporaryPDFhtml = fs.readFileSync(
  __dirname + "/temporary_invoice/template.html",
  "utf8"
);

var options = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
  footer: {
    height: "25mm",
    contents: {
      // Any page number is working. 1-based index
      default: `<div  style="
        color: #5D6975;
        font-size: 1.2em;
      ">
        <div>NOTICE:</div>
        <div class="notice">This invoice is for proof purpose. It will be rechecked from our side and the payment will
          be done accordingly.</div>
      </div>
        <span style="color: #444; text-align: center"> Invoice was created on a computer and is valid without the signature and seal.</span>`, // fallback value
    },
  },
};

exports.createPdfInvoice = async (data) => {
  const dirname = __dirname + `/pdf/${data[0].invoice_id}.pdf`;

  var document = {
    html: temporaryPDFhtml,
    data: {
      response: data,
    },
    path: dirname,
    type: "pdf",
  };

  return new Promise((resolve, reject) => {
    pdf
      .create(document, options)
      .then(async (res) => {
        fs.readFile(dirname, (err, data) => {
          resolve(data);
        });
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
