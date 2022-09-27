import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, JoinColumn, ManyToOne, OneToOne } from "typeorm"
import { Products } from "./Products"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToOne(() => Products, (products)=> products.userId)
    @JoinColumn({name: 'productsId'}) 
    products: Products[]

}
