import csvdb from 'csv-database';

export class DB {
  public get: (filter?: object) => Promise<object[]>;
  public add: (data: object | object[]) => Promise<object[]>;
  public edit: (filter: object, data: object) => Promise<object[]>;
  public delete: (predicate: object) => Promise<object[]>;

  constructor() {
    this.connectDB();
  }

  private async connectDB() {
    const db = await csvdb(
      'db/db.csv',
      ['id', 'name', 'task', 'category', 'created'],
      ',',
    );
    this.get = db.get;
    this.add = db.add;
    this.edit = db.edit;
    this.delete = db.delete;
  }
}
