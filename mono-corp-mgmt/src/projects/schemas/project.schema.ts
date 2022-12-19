import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Department } from 'src/departments/schemas/department.schema';
import { ProjectStatus } from 'src/enums/ProjectStatus';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
    @Prop({ required: true})
    name: string;

    @Prop()
    idProject: number;

    @Prop()
    description: string;

    @Prop()
    state: ProjectStatus;

    @Prop()
    dateStart: string;

    @Prop()
    dateUpdate?: string;

    @Prop()
    deliveryDate: string;

    @Prop()
    updates?: string[]

    @Prop()
    expectedBilling: number;

    @Prop()
    onGoingCosts: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Department.name})
    department?: Department["name"];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);