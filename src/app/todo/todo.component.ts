import { Component, OnInit } from '@angular/core';
import { TNodeProviderIndexes } from '@angular/core/src/render3/interfaces/node';
import { Todo } from '../models/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  // todoList contains all todos
  todoList: Todo[];
  IdNumber:number=1;
  constructor() { }

  ngOnInit() {
    this.todoList=[]
  }
  // write logic to the onAddTodo method is to add a new todo to list
  // get maximum id in list and assign maximum id plus one while adding a todo
  onAddTodo(todoText: any) {
    if(todoText != ''){
      this.todoList.push({
        todoId:this.IdNumber,
        text:todoText,
        isCompleted:false
      });
      todoText='';
      this.IdNumber=this.IdNumber+1;
    }
  }

  // write logic to the onClearTodos method to delete the all todos in the todoList
  onClearTodos() {
    this.todoList=[];
  }

  // write logic to method onCompletingTask, to mark todo as as completed or not
  onCompletingTodo(todo: Todo) {
    this.todoList.map((td)=>{
      if(td.text==todo.text){td.isCompleted=!td.isCompleted};
          return td;
      })
  }

  // write logic to method onDeletingTask, to delete the todo
  onDeletingTodo(todoId) {
    let del=this.todoList.findIndex(num=>num.text!==todoId.text)
    this.todoList.splice(del,1);
  }
}
