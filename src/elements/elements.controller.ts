import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ElementsService } from './elements.service';

@Controller('elements')
export class ElementsController {
    constructor(private readonly elementsService: ElementsService) {

    }


    @Get()
    findAll() {
        return this.elementsService.findAll();
    }


    @Get(':id')
    findOne(
        @Param('id') id: number,
    ) {
        return this.elementsService.findOne(id);
    }


    @Post()
    insert(
        @Body('instance') instance: object,
    ): any {
        return this.elementsService.insert(instance);
    }


    @Patch(':id')
    updateById(
        @Param('id') id: number,
        @Body('instance') instance: object,
    ): any {
        return this.elementsService.update(id, instance);
    }


    @Delete(':id')
    deleteById(
        @Param('id') id: number
    ): any {
        return this.elementsService.delete(id);
    }


}
