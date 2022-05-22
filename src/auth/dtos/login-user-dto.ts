import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'alan@email.com' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'asecurepassword123' })
  readonly password: string;
}
