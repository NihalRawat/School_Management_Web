import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { AdminGuard } from 'src/app/auth/guards/admin-guard/admin.guard';
import { PostStudentComponent } from './admin-component/post-student/post-student.component';
import { AllStudentsComponent } from './admin-component/all-students/all-students.component';
import { UpdateStudentComponent } from './admin-component/update-student/update-student.component';
import { PayFeeComponent } from './admin-component/pay-fee/pay-fee.component';
import { AllLeavesComponent } from './admin-component/all-leaves/all-leaves.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent,canActivate:[AdminGuard]},
  {path:"student",component:PostStudentComponent,canActivate:[AdminGuard]},
  {path:"students",component:AllStudentsComponent,canActivate:[AdminGuard]},
  {path:"student/:studentId",component:UpdateStudentComponent,canActivate:[AdminGuard]},
  {path:"fee/:studentId",component:PayFeeComponent,canActivate:[AdminGuard]},
  {path:"leaves",component:AllLeavesComponent,canActivate:[AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
