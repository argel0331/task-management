import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Task } from './task.entity';
import {  TaskStatus } from './task.status.enum';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
    async createTask(createTaskdto: CreateTaskDto): Promise<Task> {
        const { title, description} = createTaskdto;

        const task = this.create({
            title,
            description,
            status: TaskStatus.OPEN,
        });

        await this.save(task);
        return task
    
    }

}