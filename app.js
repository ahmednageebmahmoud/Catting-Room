"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_service_1 = require("./services/socket.io.service");
const express_1 = __importDefault(require("express"));
const groups_router_1 = require("./router/groups.router");
const path_1 = require("path");
const measseges_router_1 = require("./router/measseges.router");
const body_parser_1 = require("body-parser");
const http_1 = require("http");
const server = express_1.default();
const serverHttp = http_1.createServer(server);
//Set Settings On All Requests
server.use((req, res, nex) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    nex();
});
server.use(body_parser_1.urlencoded());
server.use(body_parser_1.json());
//Group Router
server.use('/api/groups', groups_router_1.groupRouter);
//Message Router
server.use('/api/messages', measseges_router_1.messagesRputer);
//Read File
server.get('/images/:fileName', (req, res) => {
    res.sendFile(path_1.join(__dirname, "./images", req.params.fileName));
});
//Defualt Path
server.get("/", (req, res) => {
    res.write("Hello World");
    res.end();
});
//Init Socket Io
socket_io_service_1.SocketIOService.init(serverHttp);
serverHttp.listen(process.env.PORT || 4900, () => {
    console.log(`Server Running On http://localhost:${process.env.PORT}`);
});
