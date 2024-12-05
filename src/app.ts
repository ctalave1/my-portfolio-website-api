import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes/index';
import './config';

/**
 * Express application instance.
 * 
 * @constant
 * @type {Express}
 */
const app: Express = express();

/**
 * Configuration for Cross-Origin Resource Sharing (CORS) middleware.
 * Defines the allowed origins for requests to the server.
 * 
 * @constant
 * @type {Object}
 * @property {string[]} origin - List of allowed frontend URLs for cross-origin requests.
 * @property {number} optionsSuccessStatus - Status code returned on successful OPTIONS request (used for legacy browsers).
 */
const corsOptions: cors.CorsOptions = {
    origin: [...process.env.FE_URLS.split(',')],
    optionsSuccessStatus: 200
};

/**
 * Apply security and middleware configurations to the Express app.
 * - Uses `helmet()` for basic security hardening.
 * - Uses `cors()` with custom options to allow requests from specific origins.
 * - Allows parsing of JSON and URL-encoded data.
 */
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Routes for handling specific functionalities in the application.
 * 
 * - `/mailer`: Handles mailer-related requests.
 * - `/resume`: Handles resume-related requests.
 * 
 * @see {@link routes.mailer.mailer} for mailer-specific routes.
 * @see {@link routes.resume.resume} for resume-specific routes.
 */
app.use('/mailer', routes.mailer);
app.use('/resume', routes.resume);

export default app;
