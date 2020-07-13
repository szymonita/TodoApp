import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Task from './Task';
import { Constants } from './Constants'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private tasksSource: BehaviorSubject<Array<Task>> = new BehaviorSubject(
    [
      new Task(
        1,
        "Obudzić sie",
        Constants.State.TO_DO,
        "Bardzo ważne",
        new Date(),
        Constants.Priority.LOW
      ),
      new Task(
        2,
        "Śniadanie",
        Constants.State.IN_PROGRESS,
        "Bardzo ważne",
        new Date(),
        Constants.Priority.LOW
      ),
      new Task(
        3,
        "Obiad",
        Constants.State.READY,
        "Bardzo ważne",
        new Date(),
        Constants.Priority.LOW
      )
    ]
  );
  tasks = this.tasksSource.asObservable();

  constructor() { }

  getTaskSource() {
    return this.tasksSource;
  }

  updateTasks(task, newState) {
    const tasks = this.tasksSource.value;
    const taskToChangeIndex = tasks.findIndex((item:any) => {
      return item.id === task.id;
    });
    tasks[taskToChangeIndex].setState(newState);

    this.tasksSource.next([...tasks]);
  }

  addTask(task) {
    const currentTasksValue = this.tasksSource.value;
    const updatedTasksValue = [...currentTasksValue, task];
    this.tasksSource.next(updatedTasksValue);
  }

  editTask(task) {
    const tasks = this.tasksSource.value;
    const taskToEditIndex = tasks.findIndex((item:any) => {
      return item.id === task.id;
    });

    tasks[taskToEditIndex] = task;
    this.tasksSource.next([...tasks]);
  }

  removeTask(task) {
    const tasks = this.tasksSource.value;
    const taskToDeleteIndex = tasks.findIndex((item:any) => {
      return item.id === task.id;
    });

    tasks.splice(taskToDeleteIndex, 1);
    this.tasksSource.next([...tasks]);
  }

  sortByDate(priorityDateAsc: boolean) {
    const tasks = this.tasksSource.value;

    let tasksWithDates = [];
    let tasksWithoutDates = [];
    tasks.forEach((task:any) => {
      if (task.getToDate() == null) {
        tasksWithoutDates.push(task);
      } else {
        tasksWithDates.push(task);
      }
    });

    if (priorityDateAsc) {
      tasksWithDates.sort((a, b) => {
        return a.getToDate().getTime() - b.getToDate().getTime();
      });
    } else {
      tasksWithDates.sort((a, b) => {
        return  b.getToDate().getTime() - a.getToDate().getTime();
      });
    }

    this.tasksSource.next([...tasksWithDates, ...tasksWithoutDates]);
  }

  sortByPriority(prioritySortAsc: boolean) {
    const tasks = this.tasksSource.value;

    const low = tasks.filter((item:any) => {
      return item.priority === Constants.Priority.LOW;
    });
    const medium = tasks.filter((item:any) => {
      return item.priority === Constants.Priority.MEDIUM;
    });
    const high = tasks.filter((item:any) => {
      return item.priority === Constants.Priority.HIGH;
    });

    if (prioritySortAsc) {
      this.tasksSource.next([...high, ...medium, ...low]);
    } else {
      this.tasksSource.next([...low, ...medium, ...high]);
    }

  }
}
