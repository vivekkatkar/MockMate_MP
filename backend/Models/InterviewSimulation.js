const WebSocket = require("ws");

const wss = new WebSocket.Server({port : 8000});

function Interview(queList){
    console.log("Interview Started");

    wss.on("connection", (ws) => {
        console.log("User connected through websocket");
        let queIdx = 0;

        if(queIdx < queList.length){
            // ws.send(queList[queIdx]);
            ws.send(JSON.stringify({ question: queList[queIdx] }));
        }

        ws.on("message", (message) => {
            console.log("user response : " , message.toString());
            // console.log("Questions : " , queList);
            queIdx++;

            if(queIdx < queList.length){
                console.log(queIdx)
                // ws.send(queList[queIdx]);
                ws.send(JSON.stringify({ question: queList[queIdx] }));
            }else{
                ws.send("Interview completed");
                ws.close();
            }
        });

        ws.on("close", () => {
            console.log("Websocket connection closed");
        });

    });
}

module.exports = {Interview};