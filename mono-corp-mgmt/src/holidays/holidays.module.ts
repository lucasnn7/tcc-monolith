import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HolidaysService } from './holidays.service';
import { HolidaysController } from './holidays.controller';
import { Holiday, HolidaySchema } from './schemas/holiday.schema';
import { HolidayRepository } from './repositories/holiday.repository';
import { MongoHolidayRepository } from './repositories/mongo.holiday.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Holiday.name, schema: HolidaySchema }]),
  ],
  controllers: [HolidaysController],
  providers: [
    HolidaysService,
    {
      provide: HolidayRepository,
      useClass: MongoHolidayRepository,
    },
  ],
  exports: [HolidaysService],
})
export class HolidaysModule {}
