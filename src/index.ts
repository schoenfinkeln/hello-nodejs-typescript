import express, { NextFunction, Request, Response } from 'express';

const PORT = 3030;
const app = express();

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('👋  REQUEST incoming ', req.url);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.status(200);
  res.send('Hello Express Server! 🐣');
});

app.listen(PORT);
// tslint:disable-next-line:no-console
console.log('✨  SERVER listens on port ' + PORT);
