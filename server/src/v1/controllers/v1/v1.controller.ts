import { Controller, Get, HttpStatus } from '@nestjs/common';
import { baseUrl } from '../../routes/index';
import { MsgResponse } from '../../handlers/responses.handler';

@Controller(baseUrl)
export class V1Controller {
    @Get()
    sendWelcomeMessage(){
        return MsgResponse(HttpStatus.OK, "Welcome to Conversion App API", true);
    }
}
