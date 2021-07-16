import { CreateMailDto } from './dto/create-mail.dto';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('api/contact')
  async createMail(
    @Res() res,
    @Body() createMailDto: CreateMailDto,
  ): Promise<void> {
    const createEmail = await this.appService.createNewMail(createMailDto);
    await res.status(201).json({
      name: createEmail.name,
      email: createEmail.email,
      subject: createEmail.subject,
      message: createEmail.message,
    });
    return await this.appService.toSendMail(createEmail)
  }
}
