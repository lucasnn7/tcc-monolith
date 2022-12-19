import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Project, ProjectSchema } from './schemas/project.schema';
import { ProjectRepository } from './repositories/project.repository';
import { MongoProjectRepository } from './repositories/mongo.project.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    {
      provide: ProjectRepository,
      useClass: MongoProjectRepository,
    },
  ],
  exports: [ProjectsService]
})
export class ProjectsModule {}
