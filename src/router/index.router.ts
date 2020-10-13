import auth from '../infra/auth.infra';
import authRoute from './routes/auth.route';
import newsRoutes from './routes/news.route';

class Router {

  routes(app) {

    app.route('/').get((req, res) => {
      res.send({ versao: '0.0.1'})
    });

    authRoute.route(app);
    
    app.use(auth.validate);

    newsRoutes.routes(app);

    app.route('*').get((req, res) => {
      res.status(404).json({message: 'Route not found!'});
    });

    app.route('*').post((req, res) => {
      res.status(404).json({message: 'Route not found!'});
    });

    app.route('*').put((req, res) => {
      res.status(404).json({message: 'Route not found!'});
    });

    app.route('*').delete((req, res) => {
      res.status(404).json({message: 'Route not found!'});
    });
  }
}

export default new Router();