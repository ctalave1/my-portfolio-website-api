"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodemailer_1 = __importDefault(require("nodemailer"));
const router = (0, express_1.Router)();
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    host: 'smtps.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD
    }
});
const mailOptions = (name, email, message) => ({
    from: process.env.MAILER_EMAIL,
    to: process.env.MAILER_TARGET,
    replyTo: email,
    subject: `Contact Notification from ${name}`,
    text: `
${message.replace(/<[^>]*>/g, '')}

Sent by: ${name}
Email: ${email}
  `
});
const sendMail = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, message } = req.body;
        const info = yield transporter.sendMail(mailOptions(name, email, message));
        return info;
    }
    catch (e) {
        throw e;
    }
});
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield sendMail(req);
        console.log(JSON.stringify({ resp }, null, 2));
        return res.send(resp.response);
    }
    catch (e) {
        console.error({ e });
        return res.status(400).json({ error: e });
    }
}));
exports.default = router;
