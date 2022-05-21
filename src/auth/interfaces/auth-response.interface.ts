import { UserResponse } from 'users/interfaces';
import { ApiProperty } from '@nestjs/swagger';

export interface IAuthResponse {
  user: UserResponse;
  token: string;
}

export class AuthResponse implements IAuthResponse {
  @ApiProperty({
    example: {
      id: 1,
      name: 'Alan Morales',
      email: 'alan@email.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  user: UserResponse;
  @ApiProperty({ example: 'eyJhbGjhdOiJIUFihsiIsInR5bgI6IrgFsCJ9' })
  token: string;
}
