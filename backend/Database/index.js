const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();

async function InsertResume(username, data){
    await prisma.user.update({
        where: {
            email : username
        },
        data :{
            resume :  data
        }
    });

    console.log("User resume data updated");
}

async function getResumeData(username){
    const res = await prisma.user.findFirst({
        select : {
            resume : true
        },
        where : {
            email : username
        }
    });

    return res;
}

module.exports = {
    InsertResume,
    getResumeData
};