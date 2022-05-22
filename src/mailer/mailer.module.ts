import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { MailerModule as NodemailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as mailgunTransport from 'nodemailer-mailgun-transport';
import { MailerService } from './mailer.service';
import { join } from 'path';
import config from 'config';

@Module({
  imports: [
    ConfigModule,
    NodemailerModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => ({
        transport: mailgunTransport(configService.mailgun),
        defaults: {
          from: configService.mailgun.fromAddress,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [MailerService],
  exports: [MailerService],
})
export class MailerModule {}
