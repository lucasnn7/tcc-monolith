import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Employee } from 'src/employees/schemas/employee.schema';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
  @Prop({ required: true })
  name: string;

  @Prop()
  budget: number;

  @Prop()
  segment: string;

  @Prop(/*{ type: mongoose.Schema.Types.ObjectId, ref: Employee.name }*/)
  manager?: /*Employee["idDoc"]*/ string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
