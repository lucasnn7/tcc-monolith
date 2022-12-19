import { Injectable } from '@nestjs/common';
import { DepartmentsService } from 'src/departments/departments.service';
import { ProjectsService } from 'src/projects/projects.service';
import { AllocateProjectDto } from '../dto/allocate-project.dto';

@Injectable()
export class AllocateProjectService {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly departmentsService: DepartmentsService,
  ) {}

  async execute(allocateProjectDto: AllocateProjectDto) {
    const logId = 'utilsAllocateProject';
    console.log('Utils processing AllocateProject...');
    console.time(logId);
    const { idProject, idDepartment } = allocateProjectDto;
    let departmentResponse;
    let projectResponse;

    try {
      console.log('utils calling ProjectsService...');
      projectResponse = await this.projectsService.get(idProject);
    } catch (error) {
      console.error('Error to call ProjectsService...');
      throw new Error(error);
    }

    try {
      console.log('utils calling DepartmentsService...');
      departmentResponse = await this.departmentsService.get(idDepartment);
    } catch (error) {
      console.error('Error to call DepartmentsService...');
      throw new Error(error);
    }

    if (departmentResponse.budget > projectResponse.onGoingCosts) {
      try {
        await this.departmentsService.update(idDepartment, {
          budget: departmentResponse.budget - projectResponse.onGoingCosts,
        });
      } catch (error) {
        console.error('Failed to update department...');
        throw new Error(error);
      }

      try {
        await this.projectsService.update(idProject, {
          department: idDepartment,
        });
      } catch (error) {
        console.error('Failed to update project...');
        throw new Error(error);
      }
      console.timeEnd(logId);
      return `Project: ${idProject}. allocated with success.`;
    } else {
      console.error(
        `Impossible to allocate project: ${idProject}. Department budget: ${idDepartment} less than expected expenses.`,
      );
      return;
    }
  }
}
