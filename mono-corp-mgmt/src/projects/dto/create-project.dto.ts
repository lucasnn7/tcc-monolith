import { ProjectStatus } from "src/enums/ProjectStatus";

export class CreateProjectDto {
    name: string;
    idProject: string;
    description: string;
    state: ProjectStatus;
    dateStart: Date;
    dateUpdate?: Date;
    deliveryDate: Date;
    updates?: string[]
    expectedBilling: number;
    onGoingCosts: number;
    department?: string;
}
