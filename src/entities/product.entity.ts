
import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity('product_details')
export class Product {
    @ObjectIdColumn()
    _id:ObjectId;

    @Column()
    id:number;

    @Column()
    product_name:string;

    @Column()
    product_description:string;

    @Column()
    product_price:number;
}
