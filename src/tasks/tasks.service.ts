import { Delete, Injectable, NotFoundException } from '@nestjs/common';
import {  TaskStatus } from './task.status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksfilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TasksRepository)
        private tasksRepository : TasksRepository,
    ) {}
   

    // getAllTask(): Task[] {
    //     return this.tasks;
    // }

    async getTaskById(id: string): Promise<Task> {
        const found = await this.tasksRepository.findOne('id'); //checking id in the database repo

        if(!found) {
            throw new NotFoundException(`Task with id "${id}" not found`)
        }

        return found;

    }


    // }

    // getTasksWithFilters(filterDto: GetTasksfilterDto): Task[] {
    //     const { status, search } = filterDto;

    //     // Define a temporary array to hold the result
    //     let tasks = this.getAllTask();

    //     // Do something with status

    //     if (status) {
    //         tasks = tasks.filter((task) => task.status === status);
    //     }

    //     // Do something with search

    //     if (search) {
    //         tasks = tasks.filter((task) => {
    //             if (task.title.includes(search) || task.description.includes(search)) {
    //                 return true;
    //             }

    //             return false;
    //         })
    //     }

    //     // Return final result

    //     return tasks;

    // }


    createTask(createTaskdto: CreateTaskDto): Task {
        return this.tasksRepository.create(createTaskdto);
    }

    // // extract ID and delete the task
    // deleteTask(id: string): void {
    //     const found = this.getTaskById(id)
    //     this.tasks = this.tasks.filter((task) => task.id !== found.id);
    // }

    // //extract ID and the status and update the tasks's status (OPEN, DONE, IN_PROGRESS)
    // // return the task back to the client
    // updateTaskStatus(id: string, status: TaskStatus) {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}
