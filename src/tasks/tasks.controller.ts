import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksfilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task.status.enum';
import { TasksService } from './tasks.service';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { get } from 'http';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    tasksService: any;
    constructor(private taskService: TasksService) { }

    // @Get()
    // getTasks(@Query() filterDto: GetTasksfilterDto): Task[] {
    //     // if we have any filter defined, call taskService.getTaskWithFilters
    //     //otherwise just get all tasks. Will use a query parameter
    //     if (Object.keys(filterDto).length) {
    //         return this.taskService.getTasksWithFilters(filterDto);
    //     } else {
    //         return this.taskService.getAllTask();
    //     }

    // }

    @Get('/:id')
    getTaskById(@Param('id')id: string) : Promise<Task> {
        return this.taskService.getTaskById(id);

    }

   @Post()
    createTask(@Body() createTaskdto: CreateTaskDto): Task {
        return this.taskService.createTask(createTaskdto);

    }

    // // URL contain the id of the task to be deleted
    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): void {
    //     return this.taskService.deleteTask(id);
    // }

    // // URL contain the id of the task to be updated
    // //The request body will contain the new status
    // // return the task back to the client
    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id: string,
    //     @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    // ): Task {
    //     const { status } = updateTaskStatusDto;
    //     return this.taskService.updateTaskStatus(id, status)

    // }

}
