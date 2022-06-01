import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './compenents/dashbord/dashbord.component';
import { DatatableComponent } from './compenents/datatable/datatable.component';
import { SigninComponent } from './compenents/signin/signin.component';
import { SignupComponent } from './compenents/signup/signup.component';
import { UploadfilesComponent } from './compenents/uploadfiles/uploadfiles.component';
const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'datatable',component:DatatableComponent},
  {path:'uploadfiles',component:UploadfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
