import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable, ManyToMany } from 'typeorm';
import { Element } from '../elements/element.entity';
import { Taolu } from '../taolu/taolu.entity';

@Entity()
export class Step {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sortOrder: number;

    @Column({ name: 'taoluId'})
    taoluId: number;

    @ManyToOne(type => Taolu, taolu => taolu.steps)
    @JoinColumn({ name: 'taoluId' })
    taolu: Taolu;



    @ManyToMany(type => Element, { cascade: true })
    @JoinTable({
        name: 'step_has_elements',
        joinColumn: { name: 'stepId', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'elementId', referencedColumnName: 'id'},
    })
    elements: Element[];



    constructor(sortOrder: number, taoluId: number) {
        this.sortOrder = sortOrder;
        this.taoluId = taoluId;
    };
}
