const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function InsertResume(username, data) {
  await prisma.user.update({
    where: {
      email: username,
    },
    data: {
      parsedResume: data,
    },
  });

  console.log("User resume data updated");
}

async function getResumeData(username) {
  const res = await prisma.user.findFirst({
    select: {
      parsedResume: true,
    },
    where: {
      email: username,
    },
  });

  return res;
}

async function SignUp(data) {
  try {
    const res = await prisma.user.create({});
  } catch (err) {}
}

module.exports = {
  InsertResume,
  getResumeData,
};
