import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigType } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'users';
import { IJWTPayload } from 'auth/interfaces';
import config from 'config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(config.KEY) configService: ConfigType<typeof config>,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.jwt.secret,
      ignoreExpiration: false,
    });
  }

  async validate(payload: IJWTPayload) {
    const user = await this.usersService.finOneById(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    delete user['password'];
    return user;
  }
}
