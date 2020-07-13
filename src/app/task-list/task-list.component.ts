import { Component, OnInit } from '@angular/core';
import Task from '../dataModel/Task';
import { Constants } from '../dataModel/Constants';
import { DataService } from '../dataModel/DataService';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditTaskDialog } from '../dialogs/edit-task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];

  constructor(
    private data: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.data.tasks.subscribe(tasks => this.tasks = tasks);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      const containerState = event.container.id;
      let newState: Constants.State;
      switch (containerState) {
        case 'toDoList':
          newState = Constants.State.TO_DO;
          break;
        case 'inProgressList':
          newState = Constants.State.IN_PROGRESS;
          break;
        case 'readyList':
          newState = Constants.State.READY;
          break;
      }

      this.data.updateTasks(
        event.container.data[event.currentIndex],
        newState
      );

    }
  }

  editTaskItem(task: Task) {
    this.dialog.open(EditTaskDialog, {
      width: '250px',
      data: { task: task }
    });
  }

  deleteTaskItem(task) {
    this.data.removeTask(task);
  }

}
