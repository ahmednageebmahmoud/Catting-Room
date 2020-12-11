"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIOService = void 0;
const socket_io_1 = require("socket.io");
class SocketIOService {
    static init(httpServer) {
        this.socketIoServer = new socket_io_1.Server(httpServer, {
            cors: {
                allowedHeaders: "*",
                origin: "*"
            }
        });
        //On New User Connect
        this.socketIoServer.on("connect", (soct) => {
            console.log("New User Connect");
        });
    }
    /**
     * Send Message To Groups
     * @param message
     */
    static sendMessageToGroups(message) {
        this.socketIoServer.emit("sendMessage", message);
    }
} //End Class
exports.SocketIOService = SocketIOService;
