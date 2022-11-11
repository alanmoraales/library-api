import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Field, ObjectType } from '@nestjs/graphql';

ObjectType();
export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Alan Morales' })
  @Field()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'alan@email.com' })
  @Field()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'asecurepassword123' })
  @Field()
  readonly password: string;
}
