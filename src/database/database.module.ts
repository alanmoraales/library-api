import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'pg';
import config from 'config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port, url } =
          configService.postgres;
        const baseConfig = {
          synchronize: false,
          autoLoadEntities: true,
        };
        if (url) {
          return {
            type: 'postgres',
            url,
            ssl: { require: true, rejectUnauthorized: false },
            ...baseConfig,
          };
        }
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: dbName,
          ...baseConfig,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port, url } =
          configService.postgres;
        const dbConfig = url || {
          user,
          host,
          database: dbName,
          password,
          port,
        };
        const client = new Client(dbConfig);
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['PG', TypeOrmModule],
})
export class DatabaseModule {}
