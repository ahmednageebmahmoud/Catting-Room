import { Observable } from 'rxjs';
import { IMessage } from './../interfaces/i.message.interface';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

export class SocketIoService {
    static socketServer: Socket;
    static init() {
        this.socketServer = io(environment.apiUrl);
    }


    static onMessage(): Observable<IMessage> {
        return new Observable<IMessage>(obs => {
            this.socketServer.on("sendMessage", (message: IMessage) => {
                obs.next(message);
            });
        })
    }

}//End Class