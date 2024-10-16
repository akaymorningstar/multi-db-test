import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity('customers_details')
export class Customer {
    @ObjectIdColumn()
    id:ObjectId;

    @Column()
    customer_id:number;

    @Column()
    first_name:string;

    @Column()
    last_name:string;

    @Column()
    age:number;

    @Column()
    country:string;
}
