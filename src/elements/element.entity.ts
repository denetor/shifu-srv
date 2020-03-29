import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Element {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    chineseName: string;

    @Column()
    description: string;

    @Column()
    notes: string;

    @Column()
    image: string;

    @Column()
    sound: string;


    constructor(entity) {
        if (entity) {
            this.name = entity.name ? entity.name : '';
            this.chineseName = entity.chineseName ? entity.chineseName : null;
            this.description = entity.description ? entity.description : null;
            this.notes = entity.notes ? entity.notes : null;
            this.image = entity.image ? entity.image : null;
            this.sound = entity.sound ? entity.sound : null;
        }
    };
}
