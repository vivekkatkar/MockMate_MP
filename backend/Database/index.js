const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();

async function InsertResume(username, data){
    await prisma.user.update({
        where: {
            email : username
        },
        data : data
    });

    console.log("Updated");
}

module.exports = InsertResume