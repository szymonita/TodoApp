import { Pipe, PipeTransform } from '@angular/core';
import Task from '../dataModel/Task';
import { Constants } from '../dataModel/Constants';

@Pipe({
  name: 'ready'
})
export class ReadyPipe implements PipeTransform {

  transform(tasks: Task[]): Task[] {
    return tasks.filter(task => task.getState() === Constants.State.READY)
  }

}
