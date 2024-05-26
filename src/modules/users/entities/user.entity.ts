import { Persona } from "../../persona/entities/persona.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    nombre:string;

    @Column()
    email:string;

    @Column()
    detalle:string;

    @OneToOne(()=>Persona, persona=>persona.user,{cascade:true})
    persona:Persona;

}

    