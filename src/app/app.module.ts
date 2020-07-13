import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ToDoPipe } from './utils/to-do.pipe';
import { InProgressPipe } from './utils/in-progress.pipe';
import { ReadyPipe } from './utils/ready.pipe';

import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

import { EditTaskDialog } from './dialogs/edit-task';
import { ErrorMessageDialog } from './dialogs/error-message';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskFormComponent,
    TaskListComponent,
    ToDoPipe,
    InProgressPipe,
    ReadyPipe,
    EditTaskDialog,
    ErrorMessageDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    DragDropModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
