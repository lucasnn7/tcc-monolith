import { Injectable } from '@nestjs/common';
import { EmployeesService } from 'src/employees/employees.service';
import { EmployeeDocument } from 'src/employees/schemas/employee.schema';
import { HolidaysService } from 'src/holidays/holidays.service';
import { ProjectsService } from 'src/projects/projects.service';
import { ProjectDocument } from 'src/projects/schemas/project.schema';
import { businessDay } from 'src/shared';
import { GetMonthlyPaymentDto } from '../dto/get-monthly-payment-dto';
import { MonthlyPaymentResponseDto } from '../dto/monthly-payment-response-dto';

@Injectable()
export class GetMonthlyPaymentService {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly holidaysService: HolidaysService,
    private readonly projectsService: ProjectsService,
  ) {}

  async execute(
    filtersQuery: GetMonthlyPaymentDto,
  ): Promise<MonthlyPaymentResponseDto> {
    const logId = 'utilsGetMonthlyPayment';
    console.log('Utils processing GetMonthlyPayment...');
    console.time(logId);
    const { month, year, employee } = filtersQuery;
    const workingDays = businessDay(month, year);
    let employeeResponse: EmployeeDocument;
    let projectResponse: ProjectDocument;
    let holidays;

    try {
      employeeResponse = await this.employeesService.get(employee);
    } catch (error) {
      console.error(
        'Error to get employee information on GetMonthlyPaymentService',
      );
      throw new Error(error);
    }

    const { project, firstName, lastName, hourWorked } = employeeResponse;

    try {
      holidays = this.countHolidays(month, year);
    } catch (error) {
      console.error(
        'Error to get holidays information on GetMonthlyPaymentService',
      );
      throw new Error(error);
    }

    try {
      projectResponse = await this.projectsService.get(project[0]);
    } catch (error) {
      console.error(
        'Error to get project information on GetMonthlyPaymentService',
      );
      throw new Error(error);
    }

    const { name } = projectResponse;
    console.log('utils managed to calculate monthly payment');
    console.timeEnd(logId);

    return new MonthlyPaymentResponseDto(
      firstName + ' ' + lastName,
      name,
      this.calculatePayment(hourWorked, workingDays - holidays),
    );
  }

  async countHolidays(month: number, year: number): Promise<number> {
    // TODO
    const days = new Date(year, 1, 1);
    days.setMonth(month - 1);
    const currentMonth = days.getMonth();
    let sumDays: number = 0;
    do {
      if (days.getDay() >= 1 && days.getDay() <= 5) {
        const holiday = await this.holidaysService.get(days); // should pass the current day as parameter
        if (holiday !== undefined) sumDays++;
      }
      days.setDate(days.getDate() + 1);
    } while (days.getMonth() === currentMonth);
    return sumDays;
  }

  calculatePayment = (hourWorked: number, businessDay: number) =>
    hourWorked * businessDay;
}
