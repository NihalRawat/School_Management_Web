import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { PostStudentComponent } from './admin-component/post-student/post-student.component';


@NgModule({
  declarations: [
    
    DashboardComponent,
    PostStudentComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
