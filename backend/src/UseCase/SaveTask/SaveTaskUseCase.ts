import { Injectable, BadRequestException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import { validate } from 'class-validator';
import { PrismaService } from '../../PrismaService';

@Injectable()
export default class SaveTaskUseCase implements UseCase<Promise<Task>, [dto: SaveTaskDto]> {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(dto: SaveTaskDto): Promise<Task> {
    // Validation du DTO
    const errors = await validate(dto);
    if (errors.length > 0) {
      const errorMessages = errors.map(error => Object.values(error.constraints || {})).flat().join(', ');
      throw new BadRequestException(`Validation failed: ${errorMessages}`);
    }

    // Enregistrement des données
    try {
      const task = await this.prismaService.task.create({
        data: {
          name: dto.name,
        },
      });

      return task;
    } catch (error) {
      console.error('Error saving task:', error);
      throw new BadRequestException('Failed to save task');
    }
  }
}
