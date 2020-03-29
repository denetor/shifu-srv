import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Step } from './step.entity';

@Injectable()
export class StepsService {
    constructor(
        @InjectRepository(Step)
        private stepsRepository: Repository<Step>,
    ) {}


    findAll() {
        return this.stepsRepository.find();
    }


    findOne(id: number) {
        return this.stepsRepository.findOne(id);
    }


    insert(sortOrder: number, taoluId: number) {
        const entity = new Step(sortOrder, taoluId);
        return this.stepsRepository.insert(entity);
    }


    update(id: number, instance: object) {
        return this.stepsRepository.update(id, instance);
    }


    delete(id: number) {
        return this.stepsRepository.delete(id);
    }
}
