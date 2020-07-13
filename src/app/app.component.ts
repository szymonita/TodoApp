import { Component, OnInit } from '@angular/core';
import { DataService } from './dataModel/DataService';
import Task from './dataModel/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-app';
  dateSortAsc: boolean = false;
  prioritySortAsc: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  sortByDate() {
    this.dateSortAsc = this.dateSortAsc === true ? false : true;
    this.data.sortByDate(this.dateSortAsc);
  }

  sortByPriority() {
    this.prioritySortAsc = this.prioritySortAsc === true ? false : true;
    this.data.sortByPriority(this.prioritySortAsc);
  }
}
