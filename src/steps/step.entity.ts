import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Step {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sortOrder: number;

    @Column()
    taoluId: number;


    constructor(sortOrder: number, taoluId: number) {
        this.sortOrder = sortOrder;
        this.taoluId = taoluId;
    };
}
