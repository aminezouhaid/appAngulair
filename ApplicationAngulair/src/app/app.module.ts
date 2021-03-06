import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compenents/navbar/navbar.component';
import { DashbordComponent } from './compenents/dashbord/dashbord.component';
import { SigninComponent } from './compenents/signin/signin.component';
import { SignupComponent } from './compenents/signup/signup.component';
import { DatatableComponent } from './compenents/datatable/datatable.component';
import { UploadfilesComponent } from './compenents/uploadfiles/uploadfiles.component';
import { TasksComponent } from './compenents/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
	IgxPieChartModule,
	IgxLegendModule,
	IgxItemLegendModule
 } from "igniteui-angular-charts";
import { NgApexchartsModule } from 'ng-apexcharts';
// import { ChartsComponent } from './compenents/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashbordComponent,
    SigninComponent,
    SignupComponent,
    DatatableComponent,
    UploadfilesComponent,
    TasksComponent,
    // ChartsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IgxPieChartModule,
   IgxLegendModule,
    IgxItemLegendModule,
    NgApexchartsModule,
    ReactiveFormsModule

  
  
    
    
  ],
  providers: [ FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
