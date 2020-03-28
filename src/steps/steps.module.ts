import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StepsController } from "./steps.controller";
import { StepsService } from "./steps.service";
import { Step } from "./step.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Step])],
    controllers: [StepsController],
    providers: [StepsService]
})

export class StepsModule {};
