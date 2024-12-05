import { Router, Request, Response } from 'express';
import { createReadStream } from 'fs';
import '../../config';

const router: Router = Router();

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
router.get('/', (_req: Request, res: Response) => {
  let stream = createReadStream(`${process.env.NODE_ENV === 'development' ? 'public' : 'dist/assets'}/pdfs/resume.pdf`);
  let filename = encodeURIComponent('resume.pdf');

  res.setHeader('Content-disposition', `inline; filename="${filename}"`);
  res.setHeader('Content-type', 'application/pdf');

  stream.pipe(res);
});

export default router;