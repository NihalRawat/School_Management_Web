import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './student-comp/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyLeaveComponent } from './student-comp/apply-leave/apply-leave.component';
import { GetAllLeavesComponent } from './student-comp/get-all-leaves/get-all-leaves.component';
import { UpdateStudentComponent } from './student-comp/update-student/update-student.component';
import { EmptyNotificationComponent } from '../admin/admin-component/empty-notification/empty-notification.component';
import { LoadersComponent } from '../admin/admin-component/loaders/loaders.component';
import { AdminModule } from '../admin/admin.module';
@NgModule({
  declarations: [
    DashboardComponent,ApplyLeaveComponent,GetAllLeavesComponent, UpdateStudentComponent
    
  ],
  imports: [
    MatCardModule,MatInputModule,MatProgressSpinnerModule,MatFormFieldModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,FormsModule,
    CommonModule,
    StudentRoutingModule,AdminModule
  ]
})
export class StudentModule { }
