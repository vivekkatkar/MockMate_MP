const express = require("express");
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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running at PORT ${PORT}`);
});
