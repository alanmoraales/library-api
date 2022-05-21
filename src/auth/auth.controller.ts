import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'users';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dtos';
import { AuthResponse } from './interfaces';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'El usuario ha sido registrado',
    type: AuthResponse,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'El correo ya está registrado',
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async registerUser(@Body() { password, email, name }: RegisterUserDto) {
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
