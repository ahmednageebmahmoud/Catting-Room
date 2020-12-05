import { IMessage } from './../interface/i.message.interface';
import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import { Socket } from "socket.io";
export class SocketIOService {

    static socketIoServer: Server;
    static init(httpServer: HttpServer) {
        this.socketIoServer = new Server(httpServer,{
            cors:{
                allowedHeaders:"*",
                origin:"*"
            }
        });

        //On New User Connect
        this.socketIoServer.on("connect", (soct: Socket) => {
            console.log("New User Connect");

        });
    }

    /**
     * Send Message To Groups
     * @param message 
     */
    static sendMessageToGroups(message: IMessage): void {
        this.socketIoServer.emit("sendMessage", message);
    }


}//End Class