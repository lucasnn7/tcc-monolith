import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRepository } from './repositories/customer.repository';

@Injectable()
export class CustomersService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const logId = 'customersServiceCreate';
    console.time(logId);
    try {
      console.log('CustomersService calling create...');
      const result = await this.customerRepository.create(createCustomerDto);
      console.log(`CustomersService received response: ${result}`);
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to create a new Customer at CustomersService');
      console.timeEnd(logId);
      throw new Error(error);
    }
  }

  async createWithList(createCustomerDto: CreateCustomerDto[]) {
    const logId = 'customersServiceCreate';
    const results = [];
    console.time(logId);
    try {
      createCustomerDto.forEach(async (item: CreateCustomerDto) => {
        console.log('CustomersService calling createWithList...');
        const result = await this.customerRepository.create(item);
        console.log(`CustomersService received response: ${result}`);
        results.push(result);
      });
      console.log(`Post results: ${results}`);
      console.timeEnd(logId);
      return results;
    } catch (error) {
      console.error('Error to create a new Customer at CustomersService');
      console.timeEnd(logId);
      throw new Error(error);
    }
  }

  async list() {
    const logId = 'customersServiceList';
    console.time(logId);
    try {
      console.log('CustomersService calling list...');
      const results = await this.customerRepository.list();
      console.log('CustomersService received response...');
      console.timeEnd(logId);
      return results;
    } catch (error) {
      console.error('Error to find all Customers at CustomersService');
      throw new Error(error);
    }
  }

  async get(id: string) {
    const logId = 'customersServiceGet';
    console.time(logId);
    try {
      console.log('CustomersService calling get...');
      const result = await this.customerRepository.get(id);
      console.log('CustomersService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to find one Customer at CustomersService');
      throw new Error(error);
    }
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const logId = 'customersServiceUpdate';
    console.time(logId);
    try {
      console.log('CustomersService calling update...');
      const result = await this.customerRepository.update(
        id,
        updateCustomerDto,
      );
      console.log('CustomersService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to update Customer at CustomersService');
      throw new Error(error);
    }
  }

  async delete(id: string) {
    const logId = 'customersServiceDelete';
    console.time(logId);
    try {
      console.log('CustomersService calling delete...');
      const result = await this.customerRepository.delete(id);
      console.log('CustomersService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to remove Customer at CustomersService');
      throw new Error(error);
    }
  }
}
