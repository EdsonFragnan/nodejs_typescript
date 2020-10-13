import * as jwt from 'jsonwebtoken';
import Configs from './configs.infra';

class Auth {

  validate(req, res, next) {

    let token = req.headers['x-access-token'];

    if(token) {
      jwt.verify(token, Configs.secret, (err, decoded) => {
        if(err) {
          return res.status(403).send({
            success: false,
            message: '403 - Token Inválido'
          })
        } else {
          next();
        }
      });
    } else {
      return res.status(401).send({
        success: false,
        message: '401 - Unauthorized'
      });
    }
  }
}

export default new Auth();