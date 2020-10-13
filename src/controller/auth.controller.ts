import * as jwt from 'jsonwebtoken';
import * as HttpStatus from 'http-status';

import Helper from '../infra/helper.infra';
import Configs from '../infra/configs.infra';

class AuthController {

  createToken(req, res) {
    let payload: UserToken = {
      iss: 'teste',
      iat: new Date().getSeconds(),
      exp: new Date().setMinutes(60),
      name: req.body.name,
      email: req.body.email
    };
    
    let token = jwt.sign(payload, Configs.secret);
    Helper.sendResponse(res, HttpStatus.OK, token);
  }

}

interface UserToken {
  iss: string,
  iat: number,
  exp: number,
  name: string,
  email: string,
}

export default new AuthController();