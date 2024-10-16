/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { Customer } from 'src/entities/customer.entity';
import { CustomersService } from 'src/services/customers.service';

@Controller('customers')
export class CustomersController {

  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() customer: Customer) {
    return this.customersService.create(customer);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }
}
