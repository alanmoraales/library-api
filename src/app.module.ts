import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'database';
import { AuthModule } from 'auth';
import { UsersModule } from 'users';
import { BooksModule } from 'books';
import { CartsModule } from 'carts';
import { ReserveModule } from 'reserve';
import config from 'config';
import environments from 'environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    BooksModule,
    CartsModule,
    ReserveModule,
  ],
})
export class AppModule {}
