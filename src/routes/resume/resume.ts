import { Router, Request, Response } from 'express';
import { createReadStream } from 'fs';
import '../../config';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  let stream = createReadStream(`${process.env.NODE_ENV === 'development' ? 'public' : 'dist/assets'}/pdfs/resume.pdf`);
  let filename = encodeURIComponent('resume.pdf');

  res.setHeader('Content-disposition', `inline; filename="${filename}"`);
  res.setHeader('Content-type', 'application/pdf');

  stream.pipe(res);
});

export default router;