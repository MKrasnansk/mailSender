"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
let AppService = class AppService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async createNewMail(createMailDto) {
        const { name, email, subject, message } = createMailDto;
        const newMail = await {
            name,
            email,
            subject,
            message,
        };
        return newMail;
    }
    toSendMail(createMailDto) {
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
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map