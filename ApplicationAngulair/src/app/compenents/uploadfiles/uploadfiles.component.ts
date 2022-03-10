import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent implements OnInit {
  public uploadForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private http : HttpClient, private router:Router) { }

  ngOnInit(): void {

    this.uploadForm=this.formbuilder.group({
      file:[''],
      
    })
  }


  upload(){
    this.http.post<any>("http://localhost:3000/upload",this.uploadForm.value).subscribe(res=>{
alert("Files is upload");
this.uploadForm.reset();
this.router.navigate(['uploadfiles']);
    },err=>{
      alert("Semething went wrong ");
    })

}
}
