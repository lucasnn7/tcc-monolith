import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose'
import { EmployeeStatus } from 'src/enums/EmployeeStatus';
import { Address, Dependent } from 'src/models';
import { Project } from 'src/projects/schemas/project.schema';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  birthDay: string;

  @Prop({ required: true})
  idDoc: string;

  @Prop()
  addmissionDate: string;

  @Prop()
  address?: Address;

  @Prop()
  profesion: string;

  @Prop()
  hourWorked: number;

  @Prop()
  workingDay: number;

  @Prop()
  dependents?: Dependent[];

  @Prop()
  status?: EmployeeStatus;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Project'})
  project?: Project["idProject"];

}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
