import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';

@Controller('holidays')
export class HolidaysController {
  constructor(private readonly holidaysService: HolidaysService) {}

  @Post()
  create(@Body() createHolidayDto: CreateHolidayDto) {
    return this.holidaysService.create(createHolidayDto);
  }

  @Post('/massive-load')
  createWithList(@Body() createHolidayDto: CreateHolidayDto[]) {
    return this.holidaysService.createWithList(createHolidayDto);
  }

  @Get()
  findAll() {
    return this.holidaysService.list();
  }

  @Get(':id')
  findOne(@Param('date') date: Date) {
    return this.holidaysService.get(date);
  }

  @Patch(':id')
  update(
    @Param('date') date: Date,
    @Body() updateHolidayDto: UpdateHolidayDto,
  ) {
    return this.holidaysService.update(date, updateHolidayDto);
  }

  @Delete(':id')
  remove(@Param('date') date: Date) {
    return this.holidaysService.delete(date);
  }
}
