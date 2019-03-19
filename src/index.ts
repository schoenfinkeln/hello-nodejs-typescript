import bodyParser = require('body-parser');
import express, { Request, Response } from 'express';
import morgan = require('morgan');
import { tasksRouter } from './tasks/router/tasks.router';

const PORT = 3030;
const app = express();

app.use(bodyParser.json());
app.use(morgan('common', { immediate: true }));

app.use('/tasks', tasksRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200);
  res.send('Hello Express Server! 🐣');
});

app.listen(PORT);
// tslint:disable-next-line:no-console
console.log('✨  SERVER listens on port ' + PORT);
