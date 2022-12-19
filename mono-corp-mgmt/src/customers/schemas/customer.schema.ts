import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Address } from 'src/models/address.entity';
import { Project } from 'src/projects/schemas/project.schema';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop({ required: true })
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ required: true })
  idDoc: string;

  @Prop(/*{ type: mongoose.Schema.Types.ObjectId, ref: Project.name} */)
  contractedProject?: /*Project["idProject"][]*/ number;

  @Prop()
  address?: Address;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
