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
const app = (0, express_1.default)();
const corsOptions = {
    origin: [...process.env.FE_URLS.split(',')],
    optionsSuccessStatus: 200
};
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/mailer', index_1.default.mailer.mailer);
app.use('/resume', index_1.default.resume.resume);
exports.default = app;
