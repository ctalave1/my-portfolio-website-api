"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
/**
 * Creates an HTTP server that uses the Express app.
 *
 * @constant
 * @type {http.Server}
 */
const server = http_1.default.createServer(app_1.default);
/**
 * The port on which the server will listen for incoming requests.
 * Defaults to 5000 if the `PORT` environment variable is not set.
 *
 * @constant
 * @type {Port}
 */
const port = process.env.PORT || 5000;
/**
 * Root route of the server.
 *
 * @route {GET} /
 * @param {Request} _req - The incoming request object.
 * @param {Response} res - The outgoing response object.
 * @returns {string} A splash page of sorts to show the application is running.
 */
app_1.default.get('/', (_req, res) => {
    res.send(`my-portfolio-website-api is running on port ${port} | env: ${process.env.NODE_ENV}`);
});
/**
 * Ping route for checking the health of the server.
 *
 * @route {GET} /ping
 * @param {Request} _req - The incoming request object.
 * @param {Response} res - The outgoing response object.
 * @returns {string} A 'pong' response to confirm the server is reachable.
 */
app_1.default.get('/ping', (_req, res) => {
    res.send('pong');
});
/**
 * Starts the server and listens on the specified port.
 * Logs a message to the console once the server is successfully running.
 *
 * @param {Port} port - The port on which the server should listen.
 */
server.listen(port, () => console.log(`my-portfolio-website-api is running on port ${port} | env: ${process.env.NODE_ENV}`));
