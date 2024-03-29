import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { DatabaseModule } from 'database';
import { AuthModule } from 'auth';
import { UsersModule } from 'users';
import { BooksModule } from 'books';
import { CartsModule } from 'carts';
import { MailerModule } from 'mailer';
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
    MailerModule,
    GraphQLModule.forRootAsync({
      inject: [config.KEY],
      driver: ApolloDriver,
      useFactory: (configService: ConfigType<typeof config>) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        playground: true,
        introspection: configService.graphQLServer.allowIntrospection,
      }),
    }),
  ],
})
export class AppModule {}
