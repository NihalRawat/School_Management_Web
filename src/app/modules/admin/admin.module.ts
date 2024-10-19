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
import { AllStudentsComponent } from './admin-component/all-students/all-students.component';

import {MatCardModule} from '@angular/material/card';
import { UpdateStudentComponent } from './admin-component/update-student/update-student.component';
import { PayFeeComponent } from './admin-component/pay-fee/pay-fee.component';
import { AllLeavesComponent } from './admin-component/all-leaves/all-leaves.component';
import {MatMenuModule} from '@angular/material/menu';
import { PostTeacherComponent } from './admin-component/post-teacher/post-teacher.component';
import { GetAllTeachersComponent } from './admin-component/get-all-teachers/get-all-teachers.component';
import { UpdateTeacherComponent } from './admin-component/update-teacher/update-teacher.component';
import { LoadersComponent } from './admin-component/loaders/loaders.component';
import { EmptyNotificationComponent } from './admin-component/empty-notification/empty-notification.component';
@NgModule({
  declarations: [
    
    DashboardComponent,
    PostStudentComponent,
    AllStudentsComponent,
    UpdateStudentComponent,
    PayFeeComponent,
    AllLeavesComponent,
    PostTeacherComponent,
    GetAllTeachersComponent,
    UpdateTeacherComponent,
    LoadersComponent,
    EmptyNotificationComponent
  ],
imports: [MatMenuModule,MatCardModule,MatInputModule,MatProgressSpinnerModule,MatFormFieldModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,FormsModule,
    HttpClientModule,
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    LoadersComponent,EmptyNotificationComponent
  ]
})
export class AdminModule { }
