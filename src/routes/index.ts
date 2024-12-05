import resume from './resume';
import mailer from './mailer';

/**
 * Consolidates all route modules for the application.
 * 
 * This object holds references to all route handlers such as `resume` and `mailer`. 
 * It helps in organizing the routes into separate modules, making the application scalable and maintainable.
 * 
 * @namespace routes
 * @property {Router} resume - The route handler for resume-related requests.
 * @property {Router} mailer - The route handler for mailer-related requests.
 */
const routes = {
  resume,
  mailer,
}

export default routes;