import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/modules/admin-service/admin.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

    teacherId:number=this.route.snapshot.params['teacherId'];
  constructor(private adminService:AdminService,private route:ActivatedRoute,
    private fb:FormBuilder,private snackbar:MatSnackBar,private location: Location
  ) { }
  validateForm:FormGroup;

  ngOnInit(): void {
    this.getTeacherById();
    this.validateForm=this.fb.group({
      name:[null,Validators.required],
      gender:[null,Validators.required],
      department:[null,Validators.required],
      qualification:[null,Validators.required],
      address:[null,Validators.required],
      dob:[null,Validators.required],
    })
  }

  getTeacherById(){
    this.adminService.getTeacherById(this.teacherId).subscribe(
      (res)=>{
          console.log(res);
          this.validateForm.patchValue(res.teacherDto);
      }
    )

  }
  updateTeacher(){
    this.adminService.updateTeacher(this.teacherId,this.validateForm.value).subscribe(
      (res)=>{
        console.log(res);
        if(res.id !=null){
          this.snackbar.open("Teacher Detail's Update Sucessfully","Close",{duration:4000});
        }else{
          this.snackbar.open("Something went wrong","Close",{duration:4000});
        }
      }
    )
  }
  goBack():void{
    this.location.back();
  }

}
