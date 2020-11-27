import expres, { Application, Request, Response } from "express";


const server: Application = expres();

server.listen(4900, () => {
    console.log('Server Running On http://localhost:4900');

});

server.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});
