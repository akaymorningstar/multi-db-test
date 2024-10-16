/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product, 'testConnection')
    private productsRepository: Repository<Product>,
  ) {}

  create(product: Product) {
    return this.productsRepository.save(product);
  }

  findAll() {
    return this.productsRepository.find();
  }
}
