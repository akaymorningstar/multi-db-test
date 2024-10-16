import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './../controllers/customers.controller';
import { CustomersService } from './../services/customers.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Customer } from 'src/entities/customer.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Customer]), // Ensure the Customer entity is imported here
    ],
    controllers: [
        CustomersController, ],
    providers: [
        CustomersService, ],
})
export class CustomersModule {}
