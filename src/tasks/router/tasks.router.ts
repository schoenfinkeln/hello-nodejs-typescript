import express from 'express';
import {
  addTaskAction,
  deleteTaskAction,
  listTasksAction,
} from '../controller/tasks.controller';

export const tasksRouter = express.Router();

tasksRouter.get('/', listTasksAction);

tasksRouter.delete('/:id', deleteTaskAction);

tasksRouter.post('/', addTaskAction);
