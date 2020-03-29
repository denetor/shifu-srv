import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElementsController } from "./elements.controller";
import { ElementsService } from "./elements.service";
import { Element } from "./element.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Element])],
    controllers: [ElementsController],
    providers: [ElementsService]
})

export class ElementsModule {};
