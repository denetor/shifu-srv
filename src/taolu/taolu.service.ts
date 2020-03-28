import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Taolu } from './taolu.entity';

@Injectable()
export class TaoluService {
    constructor(
        @InjectRepository(Taolu)
        private taoluRepository: Repository<Taolu>,
    ) {}


    findAll() {
        return this.taoluRepository.find();
    }


    findOne(id: number) {
        return this.taoluRepository.findOne(id);
    }


    insert(name: string) {
        const entity = new Taolu(name);
        return this.taoluRepository.insert(entity);
    }


    update(id: number, instance: object) {
        return this.taoluRepository.update(id, instance);
    }


    delete(id: number) {
        return this.taoluRepository.delete(id);
    }
}
