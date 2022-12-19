import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { EmployeeRepository } from './repositories/employee.repository';
import { MongoEmployeeRepository } from './repositories/mongo.employee.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
  ],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    {
      provide: EmployeeRepository,
      useClass: MongoEmployeeRepository,
    },
  ],
  exports: [EmployeesService],
})
export class EmployeesModule {}
