import { Request, Response } from 'express';
import { taskModel } from '../model/tasks.model';

export function listTasksAction(request: Request, response: Response) {
  taskModel
    .getAll()
    .then((tasks) => {
      response.status(200);
      response.send(tasks);
    })
    .catch((err) => {
      response.status(500);
      response.send(err);
    });
}

export function addTaskAction(request: Request, response: Response) {
  const task = { ...defaultTask, ...request.body };
  taskModel
    .add(task)
    .then((result) => {
      response.status(202);
      response.send(result);
    })
    .catch((err) => {
      response.status(500);
      response.send(err);
    });
}

export function deleteTaskAction(request: Request, response: Response) {
  const id = request.param('id');
  taskModel
    .remove(id)
    .then((task) => {
      response.status(202);
      response.send(task);
    })
    .catch((err) => {
      response.status(500);
      response.send(err);
    });
}

const defaultTask = {
  category: '',
  created: '',
  id: '',
  name: '',
  task: '',
};
