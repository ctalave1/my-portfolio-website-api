import { Router, Request, Response } from 'express';
// import * from 'nodemailer';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ sent: true });
});

export default router;