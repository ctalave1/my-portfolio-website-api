import express, { Express } from 'express';
import 'dotenv/config';
import routes from './routes/index.js';

const app: Express = express();

app.use(`/public`, express.static('public'))

// app.use('/mailer');
app.use('/resume', routes.resume.resume);

export default app;
