// auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    // 将解码后的JSON作为其单一参数
    // 基于JWT签名的工作方式，我们可以保证我们收到的是一个有效的令牌，
    // 而这个令牌是我们之前签署并发放给一个有效用户的
    return { userId: payload.sub, username: payload.username };
  }
}
