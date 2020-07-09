import { Component } from '@angular/core';
import Task from './dataModel/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-app';
  howManyClicks: number = 0;
  defaultTask = new Task("ma");

  countClick() {
    this.howManyClicks += 1;
  }
}
