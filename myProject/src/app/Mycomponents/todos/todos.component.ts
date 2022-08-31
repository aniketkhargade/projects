import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos:Todo[];
  constructor() { 
    this.todos = [
     { sno: 1
      title:"This is a Title",
      desc:"Discription",
      active:true
     },
     { sno: 2
      title:"This is a Title1",
      desc:"Discription",
      active:true
     },
     { sno: 3
      title:"This is a Title2",
      desc:"Discription",
      active:true
     }
    ]
  }

  ngOnInit(): void {
  }

}
