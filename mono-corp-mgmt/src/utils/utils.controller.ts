import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AllocateEmployeeDto } from './dto/allocate-employee.dto';
import { AllocateProjectDto } from './dto/allocate-project.dto';
import { CreateProjectContractDto } from './dto/create-project-contract-dto';
import { GetMonthlyPaymentDto } from './dto/get-monthly-payment-dto';
import {
  AllocateEmployeeService,
  AllocateProjectService,
  DismissEmployeeService,
} from './services';
import { CreateProjectContractService } from './services/create-project-contract.service';
import { GetMonthlyPaymentService } from './services/get-monthly-payment.service';

@Controller('utils')
export class UtilsController {
  constructor(
    private readonly createProjectContractService: CreateProjectContractService,
    private readonly getMonthlyPaymentService: GetMonthlyPaymentService,
    private readonly allocateProjectService: AllocateProjectService,
    private readonly allocateEmployeeService: AllocateEmployeeService,
    private readonly dismissEmployeeService: DismissEmployeeService,
  ) {}

  @Post('/contract-project')
  createProjectContract(
    @Body() createProjectContractDto: CreateProjectContractDto,
  ): Promise<string> {
    return this.createProjectContractService.execute(createProjectContractDto);
  }

  @Get('/monthly-payment')
  getMonthlyPayment(@Query() filtersQuery: GetMonthlyPaymentDto) {
    return this.getMonthlyPaymentService.execute(filtersQuery);
  }

  @Patch('/allocate-project')
  allocateProject(@Query() allocateProjectDto: AllocateProjectDto) {
    return this.allocateProjectService.execute(allocateProjectDto);
  }

  @Patch('/allocate-employee')
  allocateEmployee(@Query() allocateEmployeeDto: AllocateEmployeeDto) {
    return this.allocateEmployeeService.execute(allocateEmployeeDto);
  }

  @Patch('/dismiss-employee')
  dismissEmployee(@Param() idEmployee: string) {
    return this.dismissEmployeeService.execute(idEmployee);
  }

  // @Get()
  // findAll() {
  //   return console.log('GET /utils');
  // }
}
