import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from 'users';
import { AuthService } from './auth.service';
import { AuthResponse } from './interfaces';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Mutation(() => AuthResponse)
  async registerUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const isRegisteredEmail = await this.usersService.isRegisteredEmail(email);
    if (isRegisteredEmail) {
      throw new BadRequestException('El correo ya está registrado');
    }
    const hashedPassword = await this.authService.getHashedPasswordAndToken(
      password,
    );
    const user = await this.usersService.createAndSaveUser({
      password: hashedPassword,
      email,
      name,
    });
    const token = this.authService.getJWTForUser(user.id);
    delete user['password'];
    return {
      user,
      token,
    };
  }
}
