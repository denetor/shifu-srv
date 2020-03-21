import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Taolu } from './taolu.entity';

@Injectable()
export class TaoluService {


    private taolu: Taolu[] = [];


    constructor(
        @InjectRepository(Taolu)
        private taoluRepository: Repository<Taolu>,
    ) {}



    findAll() {
        return this.taoluRepository.find();
    }



    insert(name: string) {
        const entity = new Taolu(name);
        return this.taoluRepository.insert(entity);
    }
}
