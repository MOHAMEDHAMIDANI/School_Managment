import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class student { 
    @ObjectIdColumn()
    _id: string;
    @PrimaryGeneratedColumn()
    id : string;
    @Column()
    firstName : string;
    @Column()
    lastName : string;
}