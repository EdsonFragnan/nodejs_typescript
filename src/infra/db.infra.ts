import * as mongoose from 'mongoose';

class Database {
  private DB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/nodejs_typescript';
  private mong = mongoose;

  constructor() {}

  createConnection() { 
    this.mong.connect(this.DB_URL, {
      'useUnifiedTopology': true,
      'useNewUrlParser': true
    });
  }
}

export default Database;