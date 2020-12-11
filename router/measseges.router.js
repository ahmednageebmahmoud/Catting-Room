"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesRputer = void 0;
const socket_io_service_1 = require("./../services/socket.io.service");
const express_1 = require("express");
let router = express_1.Router();
exports.messagesRputer = router;
/**
 * Recive Message From User By Url  /api/messages/send
 */
router.post("/send", (req, res) => {
    console.log(req.body);
    //Send Message To All Groups By Socket.Io
    socket_io_service_1.SocketIOService.sendMessageToGroups(req.body);
    res.end();
});
