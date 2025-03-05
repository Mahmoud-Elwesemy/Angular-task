import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
 tasks:string='';
 ListOfTask:string[]=[];
AddTask(){
  this.ListOfTask.push(this.tasks);
  this.tasks='';
}

RemoveTask(TaskIndex:any){
this.ListOfTask= this.ListOfTask.filter((task , index) => index !=TaskIndex);
}
catch:string =''
CompleteTask(TaskIndex:any){
 this.ListOfTask = this.ListOfTask.filter((task,index) => index=TaskIndex)
}
}
