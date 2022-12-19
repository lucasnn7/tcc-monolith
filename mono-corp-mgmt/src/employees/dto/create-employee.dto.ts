import { EmployeeStatus } from 'src/enums/EmployeeStatus';
import { Address } from 'src/shared/address.dto';
import { Dependent } from 'src/shared/dependent.dto';

export class CreateEmployeeDto {
  //   constructor(dto: CreateEmployeeDto) {
  //     this.firstName = dto.firstName;
  //     this.lastName = dto.lastName;
  //     this.idDoc = dto.idDoc;
  //     this.birthDay = new Date(dto.birthDay);
  //     this.addmissionDate = new Date(dto.addmissionDate);
  //     dto.address && (this.address = dto.address);
  //     this.profesion = dto.profesion;
  //     this.hourWorked = dto.hourWorked;
  //     this.workingDay = dto.workingDay;
  //     dto.dependents && (this.dependents = dto.dependents);
  //     dto.status && (this.status = dto.status);
  //     dto.project && (this.project = dto.project);
  //   }
  firstName: string;
  idDoc: string;
  lastName: string;
  birthDay: string;
  addmissionDate: string;
  address?: Address;
  profesion: string;
  hourWorked: number;
  workingDay: number;
  dependents?: Dependent[];
  status?: EmployeeStatus;
  project?: number;
}
