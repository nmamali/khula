import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Schools extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ nullable: false})
    name!: string
    @Column({ nullable: false})
    address!: string
    @Column({ nullable: false})
    longitude!: string
    @Column({ nullable: false})
    latitude!: string
    @Column({ nullable: false})
    imageLink!: string
}