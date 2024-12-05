"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const index_1 = __importDefault(require("./routes/index"));
require("./config");
/**
 * Express application instance.
 *
 * @constant
 * @type {Express}
 */
const app = (0, express_1.default)();
/**
 * Configuration for Cross-Origin Resource Sharing (CORS) middleware.
 * Defines the allowed origins for requests to the server.
 *
 * @constant
 * @type {Object}
 * @property {string[]} origin - List of allowed frontend URLs for cross-origin requests.
 * @property {number} optionsSuccessStatus - Status code returned on successful OPTIONS request (used for legacy browsers).
 */
const corsOptions = {
    origin: [...process.env.FE_URLS.split(',')],
    optionsSuccessStatus: 200
};
/**
 * Apply security and middleware configurations to the Express app.
 * - Uses `helmet()` for basic security hardening.
 * - Uses `cors()` with custom options to allow requests from specific origins.
 * - Allows parsing of JSON and URL-encoded data.
 */
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/**
 * Routes for handling specific functionalities in the application.
 *
 * - `/mailer`: Handles mailer-related requests.
 * - `/resume`: Handles resume-related requests.
 *
 * @see {@link routes.mailer.mailer} for mailer-specific routes.
 * @see {@link routes.resume.resume} for resume-specific routes.
 */
app.use('/mailer', index_1.default.mailer);
app.use('/resume', index_1.default.resume);
exports.default = app;
