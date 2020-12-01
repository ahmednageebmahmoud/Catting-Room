import { Request, Response, Router } from "express";

let router=Router();

/**
 * Recive Message From User By Url  /api/messages/send
 */
router.post("/send",(req:Request,res:Response)=>{
   console.log(req.body) 
   res.end();
});


export{router as messagesRputer}