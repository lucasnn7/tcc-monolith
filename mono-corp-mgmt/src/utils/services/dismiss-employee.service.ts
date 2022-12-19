import { Injectable } from '@nestjs/common';
import { EmployeesService } from 'src/employees/employees.service';
import { EmployeeStatus } from 'src/enums/EmployeeStatus';
import { ProjectsService } from 'src/projects/projects.service';
import { GetMonthlyPaymentService } from './get-monthly-payment.service';

@Injectable()
export class DismissEmployeeService {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly projectsService: ProjectsService,
    private readonly getMonthlyPaymentService: GetMonthlyPaymentService,
  ) {}

  async execute(idEmployee: string) {
    const logId = 'utilsDismissEmployee';
    console.log('Utils processing DismissEmployee...');
    console.time(logId);

    let employeeResponse;
    let paymentResponse;
    let projectResponse;

    try {
      console.log('utils calling EmployeesService...');
      employeeResponse = await this.employeesService.get(idEmployee);
    } catch (error) {
      console.error('Error to call EmployeesService...');
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
      console.error('Error to call GetMonthlyPaymentService...');
      throw new Error(error);
    }

    try {
      console.log('utils calling ProjectsService...');
      projectResponse = await this.projectsService.get(
        employeeResponse.project,
      );
    } catch (error) {
      console.error('Error to call ProjectsService...');
      throw new Error(error);
    }

    try {
      await this.projectsService.update(projectResponse.idProject, {
        onGoingCosts: projectResponse.onGoingCosts - paymentResponse.payment,
      });
    } catch (error) {
      console.error('Failed to update project...');
      throw new Error(error);
    }

    try {
      await this.employeesService.update(idEmployee, {
        status: EmployeeStatus.OFF,
      });
    } catch (error) {
      console.error('Failed to update employee...');
      throw new Error(error);
    }

    console.log(`Employee: ${idEmployee} dismiss.`);
    console.timeEnd(logId);
    return `Employee: ${idEmployee} dismiss.`;
  }
}
