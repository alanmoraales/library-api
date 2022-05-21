import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'users';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './dtos';
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

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Haz iniciado sesión',
    type: AuthResponse,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'El correo no está registrado',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Correo o contraseña incorrecta',
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async loginUser(@Body() { password, email }: LoginUserDto) {
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
