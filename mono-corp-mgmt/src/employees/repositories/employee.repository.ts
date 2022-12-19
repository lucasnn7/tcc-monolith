import { CreateEmployeeDto } from "../dto/create-employee.dto";
import { UpdateEmployeeDto } from "../dto/update-employee.dto";
import { EmployeeDocument } from "../schemas/employee.schema";

export abstract class EmployeeRepository {
    abstract create(createEmployeeDto: CreateEmployeeDto): Promise<any>;

    abstract list(): Promise<EmployeeDocument[]>;

    abstract get(id: string): Promise<EmployeeDocument>;

    abstract update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<any>;

    abstract delete(id: string): Promise<EmployeeDocument>;
}