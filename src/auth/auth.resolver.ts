import { BadRequestException, UnauthorizedException } from '@nestjs/common';
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

  @Mutation(() => AuthResponse)
  async loginUser(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new BadRequestException('El correo no está registrado');
    }
    const passwordMatch = await this.authService.comparePassword(
      password,
      user.password,
    );
    if (!passwordMatch) {
      throw new UnauthorizedException('Correo o contraseña incorrecta');
    }
    const token = this.authService.getJWTForUser(user.id);
    delete user['password'];
    return {
      user,
      token,
    };
  }
}
