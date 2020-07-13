import { Component, Inject, OnInit } from '@angular/core';
import Task from '../dataModel/Task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from '../dataModel/Constants';
import { DataService } from '../dataModel/DataService';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  task: Task
}

@Component({
  selector: 'edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskDialog {

  editTaskForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private dataTask: DataService
  ) {}

  ngOnInit(): void {
    this.editTaskForm = this.formBuilder.group({
      name: [this.data.task.getName(), [
        Validators.required
      ]],
      status: this.data.task.getState(),
      description: this.data.task.getDescription(),
      deadline: this.data.task.getToDate(),
      priority: this.data.task.getPriority()
    });
  }

  editTask() {
    const id: number = this.data.task.getId();
    const name: string = this.editTaskForm.get('name').value;
    const status: Constants.State = this.editTaskForm.get('status').value;
    const description: string = this.editTaskForm.get('description').value;
    const deadline: Date = this.editTaskForm.get('deadline').value;
    const priority: Constants.Priority = this.editTaskForm.get('priority').value;
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    /* validations */

    let taskOk: boolean = true;
    if (!name || name === "") {
      taskOk = false;
    }

    if (taskOk) {
      this.data.task.setName(name);
      this.data.task.setState(status);
      this.data.task.setDescription(description);
      this.data.task.setToDate(deadline);
      this.data.task.setPriority(priority);

      this.dataTask.editTask(this.data.task);
    }

    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  get name() {
    return this.editTaskForm.get('name');
  }

  get status() {
    return this.editTaskForm.get('status');
  }

  get description() {
    return this.editTaskForm.get('description');
  }

  get deadline() {
    return this.editTaskForm.get('deadline');
  }

  get priority() {
    return this.editTaskForm.get('priority');
  }


}
