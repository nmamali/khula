import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Schools extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string
    @Column()
    address!: string
    @Column()
    longitude!: string
    @Column()
    latitude!: string
    @Column()
    imageLink!: string
}