const fs = require("fs");
const PdfReader = require("pdfreader").PdfReader;
const express = require("express");
const router = express.Router();

function ReadResume() {
  fs.readFile("./Pratiksha_Resume.pdf", async (err, pdfBuffer) => {
    if (err) {
      console.error("Error reading PDF:", err);
      return;
    }

    let fullText = "";
    let data = "";

    const parsePdf = () => {
      return new Promise((resolve, reject) => {
        new PdfReader().parseBuffer(pdfBuffer, (err, item) => {
          if (err) {
            reject(err);
          } else if (!item) {
            console.warn("End of buffer");

            const sentences = fullText.match(/[^.!?]+[.!?]+/g) || [];
            sentences.forEach((sentence) => {
              let temp = sentence.trim();
              data += temp + " ";
            });

            resolve(data);
          } else if (item.text) {
            fullText += item.text.replace(/\s+/g, " ");
          }
        });
      });
    };

    try {
      data = await parsePdf(); // Wait for PDF parsing to complete
      console.log(data);
    } catch (error) {
      console.error("Error during PDF parsing:", error);
    }
  });
}

router.get("/parser", (req, res) => {
  res.send("Parser Page");
});

module.exports = router;
