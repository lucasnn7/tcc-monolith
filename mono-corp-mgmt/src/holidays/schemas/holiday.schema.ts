import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HolidayType } from 'src/enums/HolidayType';
import { State } from 'src/enums/State';

export type HolidayDocument = Holiday & Document;

@Schema()
export class Holiday {
    @Prop({ required: true})
    name: string;

    @Prop({ required: true})
    date: string;

    @Prop()
    type?: HolidayType;

    @Prop()
    regions?: State[]
}

export const HolidaySchema = SchemaFactory.createForClass(Holiday);