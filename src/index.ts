import http from 'http';
import { Request, Response } from 'express';
import fs from 'fs';

import app from './app';

type Port = number | string;

const server: http.Server = http.createServer(app);
const port: Port = process.env.PORT || 5000;

app.get('/', (_req: Request, res: Response) => {
  res.send(`my-portfolio-website-api is running on port ${port} | env: ${process.env.NODE_ENV}`);
});

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
})

server.listen(port, () => console.log(`my-portfolio-website-api is running on port ${port} | env: ${process.env.NODE_ENV}`));