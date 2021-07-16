import { CreateMailDto } from './dto/create-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
export declare class AppService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    getHello(): string;
    createNewMail(createMailDto: CreateMailDto): Promise<CreateMailDto>;
    toSendMail(createMailDto: CreateMailDto): void;
}
