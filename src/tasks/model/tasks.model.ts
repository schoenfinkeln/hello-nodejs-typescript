import { DB } from '../../db/database';

const db = new DB();

async function getAll() {
  return db.get();
}

async function add(task: object) {
  return db.add(task);
}

async function remove(id: string) {
  return db.delete({ id });
}

export const taskModel = { getAll, add, remove };
