import { Module } from '@nestjs/common';
import { UtilsController } from './utils.controller';
import { EmployeesModule } from 'src/employees/employees.module';
import { ProjectsModule } from 'src/projects/projects.module';
import { CustomersModule } from 'src/customers/customers.module';
import { HolidaysModule } from 'src/holidays/holidays.module';
import {
  AllocateEmployeeService,
  AllocateProjectService,
  CreateProjectContractService,
  DismissEmployeeService,
  GetMonthlyPaymentService,
} from './services';
import { DepartmentsModule } from 'src/departments/departments.module';

@Module({
  imports: [
    EmployeesModule,
    ProjectsModule,
    CustomersModule,
    HolidaysModule,
    DepartmentsModule,
  ],
  controllers: [UtilsController],
  providers: [
    AllocateEmployeeService,
    AllocateProjectService,
    CreateProjectContractService,
    DismissEmployeeService,
    GetMonthlyPaymentService,
  ],
})
export class UtilsModule {}
