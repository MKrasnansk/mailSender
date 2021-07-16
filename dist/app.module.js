"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const pug_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/pug.adapter");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            mailer_1.MailerModule.forRoot({
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
                    adapter: new pug_adapter_1.PugAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map