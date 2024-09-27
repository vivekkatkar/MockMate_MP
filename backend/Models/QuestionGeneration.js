const express = require("express");
const router = express.Router();

const {getResumeData} = require("../Database/index.js")
const {Interview} = require("./InterviewSimulation.js");

const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });


const cleanResponse = (response) => {
  const jsonStart = response.indexOf('{');
  const jsonEnd = response.lastIndexOf('}');
  return response.substring(jsonStart, jsonEnd + 1);
};

async function seperateData(userData){
  const prompt = "Please parse the following resume into a JSON object with clearly defined sections. Each section should be a separate key in the JSON object. The keys should include: 'Personal Information', 'Education', 'Work Experience', 'Skills', 'Projects', and any other relevant sections. Make sure the response is in strict JSON format so that it can be parsed without errors.";
  const result = await model.generateContent(userData + " " + prompt);
  const response = await result.response;
  const text = response.text();
  
  const cleanedRes = cleanResponse(text);

  const parsedData = JSON.parse(cleanedRes);
  const resumeMap = new Map();

  Object.keys(parsedData).forEach(section => {
    resumeMap.set(section, parsedData[section]);
  });

  return resumeMap;
}

async function getQuestions(section, data, cnt){
  const prompt = data + `This is candidates ${section} related data, please provide ${cnt} questions for his/her interview , questions should be relavant to his/her data provided. Response should contain question number as key and question as value don't provide any other information. Make sure the response is in strict JSON format so that it can be parsed without errors.`
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const cleanedRes = cleanResponse(text);
  const parsedData = JSON.parse(cleanedRes);
  
  let queList = []
  Object.keys(parsedData).forEach(section => {
    queList.push(parsedData[section]);
  });

  // console.log(section + " :- ");
  // console.log(queList);

  return queList;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function mapToList(queMap){
  let sections = Array.from(queMap.keys());
  shuffleArray(sections);

  let queArray = [];
  sections.forEach(sec => {
    queArray.push(...queMap.get(sec));
  });

  return queArray;
}

router.get("/questions", async (req, res) => {
  console.log("API called");
  const userdata = await getResumeData("vivek@gmail.com");

  const map = await seperateData(userdata.resume);
  const queMap = new Map();

  for (let [key, value] of map.entries()){
    const cnt = 3;
    const queList = await getQuestions(key, value, cnt);
    queMap.set(key, queList);
  }

  const queList = mapToList(queMap);
  Interview(queList);
  
  res.send("Question Generation model : User");
});

module.exports = router;


/*

1 resume parser
 -> string 
 -> database 

2. string <-- database
3. json 
{
"skils" : "data"
edu : data
project : data
}

4. run(skills, prompt, data)
map -> skills : question
    project : questions

5. choose one section based on probability

6. send question one by one


*/