import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentRepository } from './repositories/department.repository';

@Injectable()
export class DepartmentsService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    const logId = 'departmentsServiceCreate';
    console.time(logId);
    try {
      console.log('DepartmentsService calling create...');
      const result = await this.departmentRepository.create(
        createDepartmentDto,
      );
      console.log('DepartmentsService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to create new Department at DepartmentsService');
      throw new Error(error);
    }
  }

  async createWithList(createDepartmentDto: CreateDepartmentDto[]) {
    const logId = 'departmentsServiceCreate';
    const results = [];
    console.time(logId);
    try {
      createDepartmentDto.forEach(async (item: CreateDepartmentDto) => {
        console.log('DepartmentsService calling createWithList...');
        const result = await this.departmentRepository.create(item);
        console.log('DepartmentsService received response...');
        results.push(result);
      });
      console.timeEnd(logId);
      return results;
    } catch (error) {
      console.error('Error to create new Department at DepartmentsService');
      throw new Error(error);
    }
  }

  async list() {
    const logId = 'departmentsServiceList';
    console.time(logId);
    try {
      console.log('DepartmentsService calling list...');
      const results = await this.departmentRepository.list();
      console.log('DepartmentsService received response...');
      console.timeEnd(logId);
      return results;
    } catch (error) {
      console.error('Error to list Departments at DepartmentsService');
      throw new Error(error);
    }
  }

  async get(id: string) {
    const logId = 'departmentsServiceGet';
    console.time(logId);
    try {
      console.log('DepartmentsService calling get...');
      const result = await this.departmentRepository.get(id);
      console.log('DepartmentsService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to get Department at DepartmentsService');
      throw new Error(error);
    }
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    const logId = 'departmentsServiceUpdate';
    console.time(logId);
    try {
      console.log('DepartmentsService calling update...');
      const result = await this.departmentRepository.update(
        id,
        updateDepartmentDto,
      );
      console.log('DepartmentsService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to update Department at DepartmentsService');
      throw new Error(error);
    }
  }

  async delete(id: string) {
    const logId = 'departmentsServiceDelete';
    console.time(logId);
    try {
      console.log('DepartmentsService calling delete...');
      const result = await this.departmentRepository.delete(id);
      console.log('DepartmentsService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to delete Department at DepartmentsService');
      throw new Error(error);
    }
  }
}
