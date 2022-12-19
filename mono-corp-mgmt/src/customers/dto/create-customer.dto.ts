import { Address } from "src/shared/address.dto";

export class CreateCustomerDto {
    firstName: string;
    lastName: string;
    contractedProject?: number;
    idDoc: string;
    address: Address;
}
