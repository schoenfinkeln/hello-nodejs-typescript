import { Request, Response } from 'express';
import { taskModel } from '../model/tasks.model';

export async function listTasksAction(request: Request, response: Response) {
  const tasks = await taskModel.getAll();
  response.send(tasks);
}
