import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IJWTPayload } from './interfaces';

@Injectable()
export class AuthService {
  private hashingSaltOrRounds = 10;

  constructor(private jwtService: JwtService) {}

  async getHashedPasswordAndToken(userPassword: string) {
    const hashedPassword = await bcrypt.hash(
      userPassword,
      this.hashingSaltOrRounds,
    );
    return hashedPassword;
  }

  getJWTForUser(userId: number) {
    const payload: IJWTPayload = {
      sub: userId,
    };
    return this.jwtService.sign(payload);
  }
}
