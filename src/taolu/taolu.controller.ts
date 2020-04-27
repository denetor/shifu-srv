import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { TaoluService } from './taolu.service';

@Controller('taolu')
export class TaoluController {


    constructor(private readonly taoluService: TaoluService) {

    }


    @Get()
    findAll() {
        return this.taoluService.findAll();
    }


    @Get(':id')
    findOne(
        @Param('id') id: number,
    ) {
        return this.taoluService.findOne(id);
    }


    @Post()
    insert(
        @Body('name') name: string,
    ): any {
        return this.taoluService.insert(name);
    }


    @Patch(':id')
    updateById(
        @Param('id') id: number,
        @Body('instance') instance: object,
    ): any {
        return this.taoluService.update(id, instance);
    }


    @Delete(':id')
    deleteById(
        @Param('id') id: number
    ): any {
        return this.taoluService.delete(id);
    }


    @Get('bystep/:stepId')
    findAllByStepId(
        @Param('stepId') stepId: number,
    ) {
        return this.taoluService.findAllByStepId(stepId);
    }


}
