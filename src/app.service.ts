import { CreateMailDto } from './dto/create-mail.dto';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}
  async createNewMail(createMailDto: CreateMailDto): Promise<CreateMailDto> {
    const { name, email, subject, message } = createMailDto;
    const newMail: CreateMailDto = await {
      name,
      email,
      subject,
      message,
    };
    return newMail;
  }
  public toSendMail(createMailDto: CreateMailDto): void {
    this.mailerService
      .sendMail({
        to: 'miso.krasnansky@gmail.com',
        subject: 'CV mail ✔',
        template: __dirname + '/template/index',
        context: {
          name: createMailDto.name,
          subject: createMailDto.subject,
          email: createMailDto.email,
          message: createMailDto.message,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
