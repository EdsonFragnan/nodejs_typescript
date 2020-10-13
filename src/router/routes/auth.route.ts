import * as express from 'express';
import authToken from '../../controller/auth.controller';

class AuthRoute {

  route(app) {
    app.route('/api/v1/auth').post(authToken.createToken);
  }

}

export default new AuthRoute();