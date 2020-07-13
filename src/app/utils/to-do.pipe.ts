import { Pipe, PipeTransform } from '@angular/core';
import Task from '../dataModel/Task';
import { Constants } from '../dataModel/Constants';

@Pipe({
  name: 'toDo'
})
export class ToDoPipe implements PipeTransform {
  transform(tasks: Task[]): Task[] {
    return tasks.filter(task => task.getState() === Constants.State.TO_DO)
  }
}
