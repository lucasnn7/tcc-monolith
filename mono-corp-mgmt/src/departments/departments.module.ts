import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { Department, DepartmentSchema } from './schemas/department.schema';
import { DepartmentRepository } from './repositories/department.repository';
import { MongoDepartmentRepository } from './repositories/mongo.department.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Department.name, schema: DepartmentSchema },
    ]),
  ],
  controllers: [DepartmentsController],
  providers: [
    DepartmentsService,
    {
      provide: DepartmentRepository,
      useClass: MongoDepartmentRepository,
    },
  ],
  exports: [DepartmentsService],
})
export class DepartmentsModule {}
