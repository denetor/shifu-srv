import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaoluController } from "./taolu.controller";
import { TaoluService } from "./taolu.service";
import { Taolu } from "./taolu.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Taolu])],
    controllers: [TaoluController],
    providers: [TaoluService]
})

export class TaoluModule {};
