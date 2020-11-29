import expres, { Application, NextFunction, Request, Response } from "express";
import { groupRouter } from "./router/groups.router";
import { join } from "path";
const server: Application = expres();

//Set Settings On All Requests
server.use((req: Request, res: Response, nex: NextFunction) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    
    nex();
});

//Group Router
server.use('/api/groups', groupRouter);



//Read File
server.get('/images/:fileName',(req:Request,res:Response)=>{
    res.sendFile(join(__dirname,"./images",req.params.fileName))
});


server.listen(4900, () => {
    console.log('Server Running On http://localhost:4900');

});

