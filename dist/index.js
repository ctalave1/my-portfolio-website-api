"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const server = http_1.default.createServer(app_1.default);
const port = process.env.PORT || 5000;
app_1.default.get('/', (_req, res) => {
    res.send(`my-portfolio-website-api is running on port ${port} | env: ${process.env.NODE_ENV} | FE_URLS: ${process.env.FE_URLS.split(',')[0]}`);
});
app_1.default.get('/ping', (_req, res) => {
    res.send('pong');
});
server.listen(port, () => console.log(`my-portfolio-website-api is running on port ${port} | env: ${process.env.NODE_ENV}`));
