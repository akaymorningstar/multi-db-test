import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './../controllers/products.controller';
import { ProductsService } from './../services/products.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product], 'testConnection'), // Make sure to include the name of the connection
    ],
    controllers: [
        ProductsController,],
    providers: [
        ProductsService,],
})
export class ProductsModule { }
