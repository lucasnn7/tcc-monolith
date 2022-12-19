import { CreateHolidayDto } from "../dto/create-holiday.dto";
import { UpdateHolidayDto } from "../dto/update-holiday.dto";
import { HolidayDocument } from "../schemas/holiday.schema";

export abstract class HolidayRepository {
    abstract create(createHolidayDto: CreateHolidayDto): Promise<any>;

    abstract list(): Promise<HolidayDocument[]>;

    abstract get(date: Date): Promise<HolidayDocument>;

    abstract update(date: Date, updateHolidayDto: UpdateHolidayDto): Promise<any>;

    abstract delete(date: Date): Promise<HolidayDocument>;
}