import { Injectable } from '@nestjs/common';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { HolidayRepository } from './repositories/holiday.repository';

@Injectable()
export class HolidaysService {
  constructor(private readonly holidayRepository: HolidayRepository) {}

  async create(createHolidayDto: CreateHolidayDto): Promise<any> {
    const logId = 'holidaysServiceCreate';
    console.time(logId);
    try {
      console.log('HolidaysService calling create...');
      const result = await this.holidayRepository.create(createHolidayDto);
      console.log('HolidaysService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to create new Holiday at HolidaysService');
      throw new Error(error);
    }
  }

  async createWithList(createHolidayDto: CreateHolidayDto[]): Promise<any> {
    const logId = 'holidaysServiceCreate';
    const results = [];
    console.time(logId);
    try {
      createHolidayDto.forEach(async (item: CreateHolidayDto) => {
        console.log('HolidaysService calling createWithList...');
        const result = await this.holidayRepository.create(item);
        console.log('HolidaysService received response...');
        results.push(result);
      });
      console.timeEnd(logId);
      return results;
    } catch (error) {
      console.error('Error to create new Holiday at HolidaysService');
      throw new Error(error);
    }
  }

  async list(): Promise<any[]> {
    const logId = 'holidaysServiceList';
    console.time(logId);
    try {
      console.log('HolidaysService calling list...');
      const results = await this.holidayRepository.list();
      console.log('HolidaysService received response...');
      console.timeEnd(logId);
      return results;
    } catch (error) {
      console.error('Error to list Holidays at HolidaysService');
      throw new Error(error);
    }
  }

  async get(date: Date): Promise<any> {
    const logId = 'holidaysServiceGet';
    console.time(logId);
    try {
      console.log('HolidaysService calling get...');
      const result = await this.holidayRepository.get(date);
      console.log('HolidaysService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to get Holiday at HolidaysService');
      throw new Error(error);
    }
  }

  async update(date: Date, updateHolidayDto: UpdateHolidayDto): Promise<any> {
    const logId = 'holidaysServiceUpdate';
    console.time(logId);
    try {
      console.log('HolidaysService calling update...');
      const result = await this.update(date, updateHolidayDto);
      console.log('HolidaysService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to update Holiday at HolidaysService');
      throw new Error(error);
    }
  }

  async delete(date: Date): Promise<any> {
    const logId = 'holidaysServiceDelete';
    console.time(logId);
    try {
      console.log('HolidaysService calling delete...');
      const result = await this.holidayRepository.delete(date);
      console.log('HolidaysService received response...');
      console.timeEnd(logId);
      return result;
    } catch (error) {
      console.error('Error to delete Holiday at HolidaysService');
      throw new Error(error);
    }
  }
}
