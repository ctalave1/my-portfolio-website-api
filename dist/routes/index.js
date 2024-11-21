"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resume_1 = __importDefault(require("./resume"));
const mailer_1 = __importDefault(require("./mailer"));
const routes = {
    resume: resume_1.default,
    mailer: mailer_1.default,
};
exports.default = routes;
