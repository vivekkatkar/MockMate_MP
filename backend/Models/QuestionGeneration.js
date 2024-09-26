const express = require("express");
const router = express.Router();
// const {InsertResume} = require("../Database/index.js")



const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();



async function InsertResume(username, data1){
  await prisma.user.update({
      where: {
          email : username
      },
      data : {
        resume : data1
      }
  });

  console.log("Updated");
}


const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function run(data) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  //   const prompt =
  //     "return an json object of questions for interviewe, ask questions which are related to the provided skills and fields in the input and usualy asked in technical round. THE QUESTIONS SHOULD BE IN JSON FORMAT. Directly reply with json object nothing after or before in response. Dont pass any variables in the questions you provide. Do not send an array of questions, give questions directly in json example 'Personal questions': {question': 'what is your name?'}";

  const prompt1 = `Generate a JSON object containing questions typically asked in technical rounds, related to the provided skills and fields. The response should follow the exact format below, with questions labeled as 'question 1', 'question 2', and so on. Do not include any text or variables in the questions. Return the response as a JSON object with keys as 'question 1', 'question 2', etc. Do not include any arrays or additional text before or after the JSON object. Example response: { 'question 1': 'What is your name?', 'question 2': 'What are your technical skills?', 'question 3': 'Explain how a binary search works?' }`;

  const result = await model.generateContent(data + prompt1);
  const response = await result.response;
  const text = response.text();

  try {
    const jsonText = JSON.parse(text);
    console.log(jsonText);
  } catch (err) {
    console.log("Error!!");
  }

  //   console.log(text);
}

router.get("/questions", (req, res) => {
  // run();
  InsertResume("vivek@gmail.com", "Hello World");
  res.send("Question Generation model");
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