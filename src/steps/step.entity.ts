import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Step {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sortOrder: number;

    constructor(sortOrder: number) {
        this.sortOrder = sortOrder;
    };
}
