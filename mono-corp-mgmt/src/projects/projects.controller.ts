import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Post('/massive-load')
  createWithList(@Body() createProjectDto: CreateProjectDto[]) {
    return this.projectsService.createWithList(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectsService.list();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `${id}, kekeiks`;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectsService.delete(id);
  }
}
