import { Injectable } from '@nestjs/common';
import { EmployeesService } from 'src/employees/employees.service';
import { ProjectsService } from 'src/projects/projects.service';
import { AllocateEmployeeDto } from '../dto/allocate-employee.dto';
import { GetMonthlyPaymentService } from './get-monthly-payment.service';

@Injectable()
export class AllocateEmployeeService {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly projectsService: ProjectsService,
    private readonly getMonthlyPaymentService: GetMonthlyPaymentService,
  ) {}

  async execute(allocateEmployeeDto: AllocateEmployeeDto) {
    const logId = 'utilsAllocateEmployee';
    console.log('Utils processing AllocateEmployee...');
    console.time(logId);
    const { idEmployee, idProject } = allocateEmployeeDto;
    let employeeResponse;
    let paymentResponse;
    let projectResponse;

    try {
      console.log('utils calling EmployeesService...');
      employeeResponse = await this.employeesService.get(idEmployee);
    } catch (error) {
      console.error('Error while calling EmployeesService');
      throw new Error(error);
    }

    try {
      console.log('utils calling ProjectsService...');
      projectResponse = await this.projectsService.get(idProject);
    } catch (error) {
      console.error('Error while calling ProjectsService');
      throw new Error(error);
    }

    try {
      console.log('utils calling GetMonthlyPaymentService...');
      paymentResponse = await this.getMonthlyPaymentService.execute({
        month: 5,
        year: 2022,
        employee: idEmployee,
      });
    } catch (error) {
      console.error('Error while calling GetMonthlyPaymentService...');
      throw new Error(error);
    }

    if (paymentResponse.payment < projectResponse.expectedBilling) {
      try {
        await this.employeesService.update(idEmployee, { project: idProject });
      } catch (error) {
        console.error('Failed to update employee...');
        throw new Error(error);
      }
      try {
        await this.projectsService.update(idProject, {
          expectedBilling:
            projectResponse.expectedBilling - paymentResponse.payment,
        });
      } catch (error) {
        console.error('Failed to update project...');
        throw new Error(error);
      }
      console.timeEnd(logId);
      return `Employee: ${idEmployee}. allocated with success`;
    } else {
      console.error(
        `Impossible to allocate employee: ${idEmployee}. Project budget: ${idProject} less than expected expenses.`,
      );
      return;
    }
  }
}
