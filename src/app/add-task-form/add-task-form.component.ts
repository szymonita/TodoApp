import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Task from '../dataModel/Task';
import { Constants } from '../dataModel/Constants';
import { DataService } from '../dataModel/DataService';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorMessageDialog } from '../dialogs/error-message';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {

  addTaskForm: FormGroup;
  today: Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      status: 'Do zrobienia',
      description: '',
      deadline: '',
      priority: 'Średni'
    });

    this.today.setHours(0, 0, 0, 0);
  }

  addTask() {
    const id: number = this.data.getTaskSource().value.length + 1;
    const name: string = this.addTaskForm.get('name').value;
    const status: Constants.State = this.addTaskForm.get('status').value;
    const description: string = this.addTaskForm.get('description').value;
    const deadline: Date = this.addTaskForm.get('deadline').value;
    const priority: Constants.Priority = this.addTaskForm.get('priority').value;
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    /* validations */

    let taskOk: boolean = true;
    if (!name || name === "") {
      this.openDialog("Nazwa zadania nie może być pusta.");
      taskOk = false;
    }

    /* create new task */

    if (taskOk) {
      const newTask = new Task(
        id,
        name,
        status,
        description,
        deadline,
        priority
      );

      this.data.addTask(newTask);
    }
  }

  openDialog(message: string) {
    this.dialog.open(ErrorMessageDialog, {
      width: '250px',
      data: { message: message }
    });
  }

  /* form getters */

  get name() {
    return this.addTaskForm.get('name');
  }

  get status() {
    return this.addTaskForm.get('status');
  }

  get description() {
    return this.addTaskForm.get('description');
  }

  get deadline() {
    return this.addTaskForm.get('deadline');
  }

  get priority() {
    return this.addTaskForm.get('priority');
  }

}
