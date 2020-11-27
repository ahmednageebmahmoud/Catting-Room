"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = express_1.default();
server.listen(4900, () => {
    console.log('Server Running On http://localhost:4900');
});
server.get('/', (req, res) => {
    res.send('Hello World');
});
