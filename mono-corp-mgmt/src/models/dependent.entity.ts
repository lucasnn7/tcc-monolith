import { Prop } from '@nestjs/mongoose';
import { Address } from './address.entity';

export class Dependent {
    @Prop({ required: true})
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    birthDay: Date;

    @Prop()
    address: Address;

    @Prop()
    affiliation: string;
}