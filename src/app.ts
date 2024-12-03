import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

import routes from './routes/index';
import './config';

const app: Express = express();

const corsOptions = {
    origin: [process.env.FE_URL, process.env.FE_VERCEL_URL],
    optionsSuccessStatus: 200
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/mailer', routes.mailer.mailer);
app.use('/resume', routes.resume.resume);

export default app;
