import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Alan Morales' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'alan@email.com' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'asecurepassword123' })
  readonly password: string;
}
