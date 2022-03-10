import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
public LoginForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.LoginForm=this.formbuilder.group({
      email:[''],
      password:['']
    })
  }
signin(){
this.http.get<any>("http://localhost:3000/signupUser").subscribe(res=>{
  const user =res.find((a:any)=>{
    return a.email===this.LoginForm.value.email && a.password === this.LoginForm.value.password
  });
  if(user){
    alert("Succes");
    this.LoginForm.reset();
    this.router.navigate(['dashbord']);

  }else{
     alert("User not register");
  }

},err=>{
  alert("Sumthing went wroong ");
})
}


}
