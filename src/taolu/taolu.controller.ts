import { Controller, Get } from '@nestjs/common';
import { TaoluService } from './taolu.service';

@Controller('taolu')
export class TaoluController {


    constructor(private readonly taoluService: TaoluService) {

    }


    @Get()
    findAll() {
        return this.taoluService.findAll();
    }
}
