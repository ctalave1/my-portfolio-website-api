"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
require("../../config");
const router = (0, express_1.Router)();
/**
 * GET route handler for serving the resume PDF file.
 *
 * The route dynamically determines the file path based on the environment:
 * - In development, it serves from the 'public' directory.
 * - In production, it serves from the 'dist/assets' directory.
 *
 * The PDF is served with appropriate headers to allow inline display in the browser.
 *
 * @async
 * @function
 * @param {Request} _req - The Express request object. This is the incoming request for the PDF file.
 * @param {Response} res - The Express response object used to send the PDF file to the client.
 *
 * @returns {void} The response is streamed directly to the client as a PDF file.
 */
router.get('/', (_req, res) => {
    let stream = (0, fs_1.createReadStream)(`${process.env.NODE_ENV === 'development' ? 'public' : 'dist/assets'}/pdfs/resume.pdf`);
    let filename = encodeURIComponent('resume.pdf');
    res.setHeader('Content-disposition', `inline; filename="${filename}"`);
    res.setHeader('Content-type', 'application/pdf');
    stream.pipe(res);
});
exports.default = router;
