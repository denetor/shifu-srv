import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TaoluService } from './taolu.service';

@Controller('taolu')
export class TaoluController {


    constructor(private readonly taoluService: TaoluService) {

    }


    @Get()
    findAll() {
        return this.taoluService.findAll();
    }


    @Post()
    insert(
        @Body('name') name: string,
    ): any {
        const id = this.taoluService.insert(name);
        return {id: id};
    }
}
