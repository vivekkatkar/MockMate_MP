const express = require("express");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const cors = require("cors")
const parserRouter = require("./Models/ResumeParser");
const questionsRouter = require("./Models/QuestionGeneration");

app.use(cors({ origin: 'http://localhost:5173' }));

app.use("/model", parserRouter);
app.use("/gemini", questionsRouter);


app.get("/", (req, res) => {
  res.send("Home Page");
});


// Resume upload section
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'Resume/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('pdfFile'), (req, res) => {
  try {
    res.send({ message: 'PDF uploaded successfully!', file: req.file });
  } catch (error) {
    res.status(500).send({ error: 'Failed to upload file' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running at PORT ${PORT}`);
});