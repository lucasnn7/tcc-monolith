import { Injectable } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';
import { ProjectsService } from 'src/projects/projects.service';
import { CreateProjectContractDto } from '../dto/create-project-contract-dto';

@Injectable()
export class CreateProjectContractService {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly customersService: CustomersService,
  ) {}

  async execute(
    createProjectContractDto: CreateProjectContractDto,
  ): Promise<string> {
    const logId = 'utilsCreateProjectContract';
    console.log('Utils processing CreateProjectContract...');
    console.time(logId);
    const { idProject, idCustomer, billing } = createProjectContractDto;

    try {
      await this.projectsService.update(idProject, {
        expectedBilling: billing,
      });
    } catch (error) {
      console.error(
        'Error to update projects informations on CreateProjectContractService',
      );
      throw Error(error);
    }

    try {
      await this.customersService.update(idCustomer, {
        contractedProject: idProject,
      });
    } catch (error) {
      console.error(
        'Error to update customers information on CreateProjectContractService',
      );
      throw new Error(error);
    }
    console.timeEnd(logId);
    console.log('Project contract created.');
    return 'Project contract created.';
  }
}
