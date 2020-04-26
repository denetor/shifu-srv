import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Step } from '../steps/step.entity';

@Entity()
export class Taolu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Step, step => step.taolu, { cascade: true })
    steps: Step[];

    constructor(name: string) {
        this.name = name;
    };

}
