import { Request, Response } from 'express';
import { taskModel } from '../model/tasks.model';

export async function listTasksAction(request: Request, response: Response) {
  const tasks = await taskModel.getAll();
  response.send(tasks);
}

export async function addTaskAction(request: Request, response: Response) {
  console.log(request.body);
  const task = { ...defaultTask, ...request.body };
  const result = await taskModel.add(task);
  response.send(result);
}

export async function deleteTaskAction(request: Request, response: Response) {
  const id = request.param('id');
  const task = await taskModel.remove(id);
  response.status(202);
  response.send(task);
}

const defaultTask = {
  category: '',
  created: '',
  id: '',
  name: '',
  task: '',
};
