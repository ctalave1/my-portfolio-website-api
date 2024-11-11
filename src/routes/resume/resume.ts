import { Router, Request, Response } from 'express';
import { createReadStream } from 'fs';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  let stream = createReadStream('public/pdfs/resume.pdf')
  let filename = encodeURIComponent('resume.pdf');

  res.setHeader('Content-disposition', `inline; filename="${filename}"`)
  res.setHeader('Content-type', 'application/pdf');
  res.setHeader('Access-Control-Allow-Origin', '*')

  stream.pipe(res);
});

export default router;