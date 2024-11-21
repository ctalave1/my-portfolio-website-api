"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
require("../../config");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    let stream = (0, fs_1.createReadStream)(`${process.env.NODE_ENV === 'development' ? 'public' : 'dist/assets'}/pdfs/resume.pdf`);
    let filename = encodeURIComponent('resume.pdf');
    res.setHeader('Content-disposition', `inline; filename="${filename}"`);
    res.setHeader('Content-type', 'application/pdf');
    stream.pipe(res);
});
exports.default = router;
