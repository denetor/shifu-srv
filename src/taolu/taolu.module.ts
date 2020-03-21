import { Module } from '@nestjs/common';
import { TaoluController } from "./taolu.controller";
import { TaoluService } from "./taolu.service";

@Module({
    imports: [],
    controllers: [TaoluController],
    providers: [TaoluService]
})

export class TaoluModule {};
