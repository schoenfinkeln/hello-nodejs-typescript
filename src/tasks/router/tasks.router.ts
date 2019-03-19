import express from 'express';
import { listTasksAction } from '../controller/tasks.controller';

export const tasksRouter = express.Router();

tasksRouter.get('/', listTasksAction);
