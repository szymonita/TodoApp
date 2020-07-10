import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Task from '../dataModel/Task';
import { Constants } from '../dataModel/Constants';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {

  addTaskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

    //this.addTaskForm.valueChanges.subscribe(console.log())
  }

  addTask(): Task {
    const name: string = this.addTaskForm.get('name').value;
    const status: Constants.State = this.addTaskForm.get('status').value;
    const description: string = this.addTaskForm.get('description').value;
    const deadline: Date = this.addTaskForm.get('deadline').value;
    const priority: Constants.Priority = this.addTaskForm.get('priority').value;

    const newTask = new Task(
      name,
      status,
      description,
      deadline,
      priority
    );
    console.log("newTask");
    console.log(newTask);

    return newTask;
  }

  /* getters */

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
