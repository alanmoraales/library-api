import { UserResponse } from 'users/interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthResponse {
  @ApiProperty({
    example: {
      id: 1,
      name: 'Alan Morales',
      email: 'alan@email.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  @Field(() => UserResponse)
  user: UserResponse;

  @ApiProperty({ example: 'eyJhbGjhdOiJIUFihsiIsInR5bgI6IrgFsCJ9' })
  @Field()
  token: string;
}
