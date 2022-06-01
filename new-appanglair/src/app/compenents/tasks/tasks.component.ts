import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public taskForm !:FormGroup;
  tasks: Task [ ] = [ ];
   constructor( private taskService: TaskService,private formBuilder:FormBuilder, private http : HttpClient,private router:Router) { }
 
   ngOnInit(): void {
     this.getTasks();

     this.taskForm = this.formBuilder.group({
      
       label: [''],
       completed: [''],
      
        })

   }


   datatable(){
    this.http.post<any>("http://localhost:3000/tasks",this.taskForm.value).subscribe(res=>{
alert("task as success");
this.taskForm.reset();
this.router.navigate(['datatable']);
    },err=>{
      alert("Semething went wrong ");
    })
    
  }

 
 getTasks() {
   this.taskService.getTasks()
   .subscribe(tasks =>this.tasks= tasks )
 }


 
 }