import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Taolu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    };
}
