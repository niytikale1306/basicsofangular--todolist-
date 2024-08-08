import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { TodoItemComponent } from './Mycomponents/todo-item/todo-item.component';
import { AddTodoComponent } from './Mycomponents/add-todo/add-todo.component';
import { BrowserModule } from '@angular/platform-browser';
// import{AppRoutingModule}

@NgModule({
  declarations:[],
  imports: [
    AddTodoComponent,AppComponent,TodosComponent,TodoItemComponent,
    BrowserModule,
    // AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers:[],
})
export class AppModule { }
