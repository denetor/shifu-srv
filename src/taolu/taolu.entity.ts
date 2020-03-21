import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Taolu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    constructor(name: string) {
        this.name = name;
    };
}
