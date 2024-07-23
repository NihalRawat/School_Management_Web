import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { PostStudentComponent } from './admin-component/post-student/post-student.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    
    DashboardComponent,
    PostStudentComponent
  ],
imports: [MatInputModule,MatProgressSpinnerModule,MatFormFieldModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,FormsModule,
    HttpClientModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
