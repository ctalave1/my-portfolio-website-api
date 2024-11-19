import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtps.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSWORD
  }
});

const mailOptions = (name: string, email: string, message: string) => ({
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

const sendMail = async (req: Request) => {
  try {
    const { name, email, message } = req.body;
    const info = await transporter.sendMail(mailOptions(name, email, message));
    return info;
  } catch (e) {
    throw e;
  }
};

router.post('/', async (req: Request, res: Response) => {
  try {
    const resp = await sendMail(req);

    console.log(JSON.stringify({ resp }, null, 2));

    return res.send(resp.response);
  } catch (e) {
    console.error({ e });

    return res.status(400).json({ error: e });
  }
});

export default router;