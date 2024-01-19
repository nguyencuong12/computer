//JWT RETURN TOKEN FOR USER LOGGED IN
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import 'dotenv/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    console.log('PAYLOAD', payload);
    // IT'S MEAN JWT DECODE AS JSON
    return {
      userId: payload.sub,
      username: payload.username,
      roles: payload.roles,
      avatar: 'this is avatar',
    };
  }
}
