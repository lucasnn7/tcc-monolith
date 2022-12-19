import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectRepository } from './repositories/project.repository';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async create(createProjectDto: CreateProjectDto): Promise<any> {
    const logId = 'projectsServiceCreate';
    console.time(logId);
    try {
      console.log('ProjectsService calling create...');
      const result = await this.projectRepository.create(createProjectDto);
      console.log('CustomersService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to create new Project at ProjectsService');
      throw new Error(error);
    }
  }

  async createWithList(createProjectDto: CreateProjectDto[]): Promise<any> {
    const logId = 'projectsServiceCreate';
    const results = [];
    console.time(logId);
    try {
      createProjectDto.forEach(async (item: CreateProjectDto) => {
        console.log('ProjectsService calling createWithList...');
        const result = await this.projectRepository.create(item);
        console.log('CustomersService received response...');
        results.push(result);
      });
      console.timeEnd(logId);
      return results;
    } catch (error) {
      console.error('Error to create new Project at ProjectsService');
      throw new Error(error);
    }
  }

  async list(): Promise<any[]> {
    const logId = 'projectsServiceList';
    console.time(logId);
    try {
      console.log('ProjectsService calling list...');
      const results = await this.projectRepository.list();
      console.log('CustomersService received response...');
      console.timeEnd(logId);
      return results;
    } catch (error) {
      console.error('Error to list Projects at ProjectsService');
      throw new Error(error);
    }
  }

  async get(id: number): Promise<any> {
    const logId = 'projectsServiceGet';
    console.time(logId);
    try {
      console.log('ProjectsService calling get...');
      const result = await this.projectRepository.get(id);
      console.log('CustomersService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to get Project at ProjectsService');
      throw new Error(error);
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<any> {
    const logId = 'projectsServiceUpdate';
    console.time(logId);
    try {
      console.log('ProjectsService calling update...');
      const result = await this.update(id, updateProjectDto);
      console.log('CustomersService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to update Project at ProjectsService');
      throw new Error(error);
    }
  }

  async delete(id: number): Promise<any> {
    const logId = 'projectsServiceDelete';
    console.time(logId);
    try {
      console.log('ProjectsService calling delete...');
      const result = await this.projectRepository.delete(id);
      console.log('CustomersService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to delete Project at ProjectsService');
      throw new Error(error);
    }
  }
}
