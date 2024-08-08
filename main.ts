import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AddTodoComponent } from './app/Mycomponents/add-todo/add-todo.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
