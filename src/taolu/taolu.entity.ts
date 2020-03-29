import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Step } from '../steps/step.entity';

@Entity()
export class Taolu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    @OneToMany(type => Step, step => step.taoluId)
    steps: Step[];
}
