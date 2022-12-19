import { CreateDepartmentDto } from "../dto/create-department.dto";
import { UpdateDepartmentDto } from "../dto/update-department.dto";

export abstract class DepartmentRepository {
    abstract create(createDepartmentDto: CreateDepartmentDto): Promise<any>;

    abstract list(): Promise<any>;

    abstract get(id: string): Promise<any>;

    abstract update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<any>;

    abstract delete(id: string): Promise<any>;
}