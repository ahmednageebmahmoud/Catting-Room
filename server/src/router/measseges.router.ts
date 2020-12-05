import { SocketIOService } from './../services/socket.io.service';
import { Request, Response, Router } from "express";

let router = Router();

/**
 * Recive Message From User By Url  /api/messages/send
 */
router.post("/send", (req: Request, res: Response) => {
   console.log(req.body)
   
   //Send Message To All Groups By Socket.Io
   SocketIOService.sendMessageToGroups(req.body);

   res.end();
});


export { router as messagesRputer }