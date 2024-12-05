"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resume_1 = __importDefault(require("./resume"));
const mailer_1 = __importDefault(require("./mailer"));
/**
 * Consolidates all route modules for the application.
 *
 * This object holds references to all route handlers such as `resume` and `mailer`.
 * It helps in organizing the routes into separate modules, making the application scalable and maintainable.
 *
 * @namespace routes
 * @property {Router} resume - The route handler for resume-related requests.
 * @property {Router} mailer - The route handler for mailer-related requests.
 */
const routes = {
    resume: resume_1.default,
    mailer: mailer_1.default,
};
exports.default = routes;
