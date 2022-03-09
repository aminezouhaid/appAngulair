import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
// public signupForm !:FormGroup;
  constructor() { }

  ngOnInit(): void {
  //   this.signupForm = this.formBuilder.group({
  //  firstName: [''],
  //  lastName: [''],
  //  email: [''],
  //  password: [''],
  //   })
  }
  // getTasks() {
  //   this.taskService.getTasks()
  //   .subscribe(tasks =>this.tasks= tasks )
  

  // signup(){
  //   this.http.post<any>("http://localhost:3000/signupUser",this.signupForm.value).subscribe(res=>{
  //     alert("Signup successfull");
  //     this.signupForm.reset();
  //     this.router.navigate(['/signup']);
  //   },err=>{
  //     alert("Semething went wrong ")
  //   })
  // }

}


// private formBuilder:FormBuilder, private http : HttpClient,private router:Router