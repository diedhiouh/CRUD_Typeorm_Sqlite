import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    category: string

    @Column()
    price: number

    @Column()
    isSaled: boolean

    @Column()
    description: string

    @ManyToOne(() => User, (user) => user.products)
    @JoinColumn({name: 'userId'})
    userId: User;
}
