import { ProductsModule } from './modules/products.module';
import { CustomersModule } from './modules/customers.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Product } from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mongodb',
        url: 'mongodb://localhost:27017/Customers',
        entities: [Customer],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forRootAsync({
      name: 'testConnection',
      useFactory: () => ({
        type: 'mongodb',
        url: 'mongodb://localhost:27018/Product',
        entities: [Product],
        synchronize: true,
      }),
    }),
    CustomersModule,
    ProductsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
