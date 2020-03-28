import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { StepsService } from './steps.service';

@Controller('steps')
export class StepsController {
    constructor(private readonly stepsService: StepsService) {

    }


    @Get()
    findAll() {
        return this.stepsService.findAll();
    }


    @Get(':id')
    findOne(
        @Param('id') id: number,
    ) {
        return this.stepsService.findOne(id);
    }


    @Post()
    insert(
        @Body('sortOrder') sortOrder: number,
    ): any {
        return this.stepsService.insert(sortOrder);
    }


    @Patch(':id')
    updateById(
        @Param('id') id: number,
        @Body('instance') instance: object,
    ): any {
        return this.stepsService.update(id, instance);
    }


    @Delete(':id')
    deleteById(
        @Param('id') id: number
    ): any {
        return this.stepsService.delete(id);
    }


}
