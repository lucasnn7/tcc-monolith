import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './repositories/employee.repository';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}
  async create(createEmployeeDto: CreateEmployeeDto): Promise<any> {
    const logId = 'employeesServiceCreate';
    console.time(logId);
    try {
      console.log('EmployeesService calling create...');
      const result = await this.employeeRepository.create(createEmployeeDto);
      console.log('EmployeesService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to create new Employee at EmployeesService');
      throw new Error(error);
    }
  }

  async createWithList(createEmployeeDto: CreateEmployeeDto[]): Promise<any> {
    const logId = 'employeesServiceCreate';
    const results = [];
    console.time(logId);
    try {
      createEmployeeDto.forEach(async (item: CreateEmployeeDto) => {
        console.log('EmployeesService calling createwithList...');
        const result = await this.employeeRepository.create(item);
        console.log('EmployeesService received response...');
        results.push(result);
      });
      console.timeEnd(logId);
      return results;
    } catch (error) {
      console.error('Error to create new Employee at EmployeesService');
      throw new Error(error);
    }
  }

  async list(): Promise<any> {
    const logId = 'employeesServiceList';
    console.time(logId);
    try {
      console.log('EmployeesService calling list...');
      const results = await this.employeeRepository.list();
      console.log('EmployeesService received response...');
      console.timeEnd(logId);
      return results;
    } catch (error) {
      console.error('Error to list Employees at EmployeesService');
      throw new Error(error);
    }
  }

  async get(id: string): Promise<any> {
    const logId = 'employeesServiceGet';
    console.time(logId);
    try {
      console.log('EmployeesService calling get...');
      const result = await this.employeeRepository.get(id);
      console.log('EmployeesService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to get Employee at EmployeesService');
      throw new Error(error);
    }
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<any> {
    const logId = 'employeesServiceUpdate';
    console.time(logId);
    try {
      console.log('EmployeesService calling update...');
      const result = await this.employeeRepository.update(
        id,
        updateEmployeeDto,
      );
      console.log('EmployeesService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to update Employee at EmployeesService');
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<any> {
    const logId = 'employeesServiceDelete';
    console.time(logId);
    try {
      console.log('EmployeesService calling delete...');
      const result = await this.employeeRepository.delete(id);
      console.log('EmployeesService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to delete Employee at EmployeesService');
      throw new Error(error);
    }
  }
}
