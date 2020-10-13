import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import database from './infra/db.infra';
import router from './router/index.router';

class App {
  public app: express.Application;
  private _db: database;

  constructor() {
    this.app = express();
    this._db = new database();
    this._db.createConnection();
    this.middler();
    this.routes(this.app);
  }

  enableCors(){
    const options: cors.CorsOptions = {
      methods: 'GET, OPTIONS, PUT, POST, DELETE',
      origin: '*'
    };
    this.app.use(cors(options));
  }

  middler() {
    this.enableCors();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
  }

  routes(app) {
    router.routes(app);
  }
}

export default new App();