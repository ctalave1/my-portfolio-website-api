import express, { Express } from 'express';
import 'dotenv/config';
import routes from './routes/index.js';
import cors from 'cors';

const app: Express = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/public`, express.static('public'));

app.use('/mailer', routes.mailer.mailer);
app.use('/resume', routes.resume.resume);

export default app;
