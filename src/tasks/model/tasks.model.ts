import { DB } from '../../db/database';

const db = new DB();

async function getAll() {
  return db.get();
}

export const taskModel = { getAll };
