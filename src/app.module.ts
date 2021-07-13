import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.HOST,
        port: Number(process.env.PORT),
        secure: false,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      },
      defaults: {
        from: '<No-REPLY>miso.example@gmail.com',
      },
      template: {
        dir: process.cwd() + '/template/',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
