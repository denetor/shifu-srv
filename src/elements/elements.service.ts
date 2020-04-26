import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Element } from './element.entity';

@Injectable()
export class ElementsService {
    constructor(
        @InjectRepository(Element)
        private entitiesRepository: Repository<Element>,
    ) {}


    findAll() {
        return this.entitiesRepository.find();
    }


    findOne(id: number) {
        return this.entitiesRepository.findOne(id, { relations: ['steps']});
    }


    insert(instance) {
        return this.entitiesRepository.insert(instance);
    }


    update(id: number, instance: object) {
        return this.entitiesRepository.update(id, instance);
    }


    delete(id: number) {
        return this.entitiesRepository.delete(id);
    }
}
