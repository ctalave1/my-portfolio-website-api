import http from 'http';
import { Request, Response } from 'express';
import app from './app.js';

type Port = number | string;

const server: http.Server = http.createServer(app);
const port: Port = process.env.PORT || 5000;

app.get('/', (_req: Request, res: Response) => {
  res.send(`my-portfolio-website-api is running on port ${port}`);
});

server.listen(port, () => console.log(`my-portfolio-website-api is running on port ${port}`));