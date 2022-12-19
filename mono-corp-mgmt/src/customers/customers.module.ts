import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customer, CustomerSchema } from './schemas/customer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerRepository } from './repositories/customer.repository';
import { MongoCustomerRepository } from './repositories/mongo.customer.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  controllers: [CustomersController],
  providers: [
    CustomersService,
    {
      provide: CustomerRepository,
      useClass: MongoCustomerRepository,
    },
  ],
  exports: [CustomersService]
})
export class CustomersModule {}
