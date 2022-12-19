import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ProjectDocument } from '../schemas/project.schema';

export abstract class ProjectRepository {
  abstract create(createProjectDto: CreateProjectDto): Promise<any>;

  abstract list(): Promise<ProjectDocument[]>;

  abstract get(id: number): Promise<ProjectDocument>;

  abstract update(id: number, updateProjectDto: UpdateProjectDto): Promise<any>;

  abstract delete(id: number): Promise<ProjectDocument>;
}
