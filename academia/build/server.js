"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const app = express_1.default();
app.use('*', cors_1.default());
app.use(compression_1.default());
app.get('/', (req, res) => {
    res.send('Hola desde express');
});
const httpServer = http_1.createServer(app);
httpServer.listen({ port: 5500 }, () => console.log("Server is up"));
