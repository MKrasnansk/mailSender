import { CreateMailDto } from './dto/create-mail.dto';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createMail(res: any, createMailDto: CreateMailDto): Promise<void>;
}
