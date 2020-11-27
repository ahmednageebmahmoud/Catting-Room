import expres, { Application, Request, Response } from "express";
import { groupRouter } from "./router/groups.router";

const server: Application = expres();



 
//Group Router
server.use('/api/groups',groupRouter);

server.listen(4900, () => {
    console.log('Server Running On http://localhost:4900');

});

 