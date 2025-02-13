import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';  // Adjust the path as necessary
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent], // Import CommonModule for Angular directives
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'] // Corrected the property name
})
export class TodosComponent implements OnInit {
  localItem: string |null = null;
  todos: Todo[] = [];


  constructor() { // Corrected typo
    this.localItem = localStorage.getItem("todos");;
    if(this.localItem == null){
      this.todos = [ ];
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
    
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active ;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}