"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const app_1 = __importDefault(require("./app"));
const server = http_1.default.createServer(app_1.default);
const port = process.env.PORT || 5000;
app_1.default.get('/', (_req, res) => {
    res.send(`my-portfolio-website-api is running on port ${port} | env: ${process.env.NODE_ENV} | frontend_url: ${process.env.FE_URL} | files: ${fs_1.default.readdirSync(`${process.cwd()}`)}}`);
});
app_1.default.get('/ping', (_req, res) => {
    res.send('pong');
});
server.listen(port, () => console.log(`my-portfolio-website-api is running on port ${port} | env: ${process.env.NODE_ENV} | frontend_url: ${process.env.FE_URL}`));
