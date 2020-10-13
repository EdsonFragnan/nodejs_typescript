import newsController from '../../controller/news.controller';

class NewsRoutes {

  routes(app) {
    app.route('/api/v1/news').get(newsController.get);
    app.route('/api/v1/news/:id').get(newsController.get);
    app.route('/api/v1/news').post(newsController.get);
    app.route('/api/v1/news/:id').put(newsController.get);
    app.route('/api/v1/news/:id').delete(newsController.get);
  }

}

export default new NewsRoutes();