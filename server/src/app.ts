import { SocketIOService } from './services/socket.io.service';
import expres, { Application, NextFunction, Request, Response } from "express";
import { groupRouter } from "./router/groups.router";
import { join } from "path";
import { messagesRputer } from "./router/measseges.router";
import { urlencoded, json } from "body-parser";
import { createServer } from "http";
const server: Application = expres();
const serverHttp = createServer(server);

//Set Settings On All Requests
server.use((req: Request, res: Response, nex: NextFunction) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    nex();
});

server.use(urlencoded())
server.use(json())

//Group Router
server.use('/api/groups', groupRouter);
//Message Router
server.use('/api/messages', messagesRputer);



//Read File
server.get('/images/:fileName', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, "./images", req.params.fileName))
});

//Defualt Path
server.get("/", (req: Request, res: Response) => {
    res.write("Hello World");
    res.end();
});

//Init Socket Io
SocketIOService.init(serverHttp);

serverHttp.listen(process.env.PORT|| 4900, () => {
    console.log(`Server Running On http://localhost:${process.env.PORT}`);
});

