import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { DepartmentsModule } from './departments/departments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HolidaysModule } from './holidays/holidays.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    ProjectsModule,
    CustomersModule,
    EmployeesModule,
    DepartmentsModule,
    HolidaysModule,
    MongooseModule.forRoot('mongodb://mongodb:27017/mono-corp-mgmt'),
    UtilsModule,
  ],
})
export class AppModule {}
