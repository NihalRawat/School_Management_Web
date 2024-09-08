import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/modules/admin-service/admin.service';

@Component({
  selector: 'app-post-teacher',
  templateUrl: './post-teacher.component.html',
  styleUrls: ['./post-teacher.component.css']
})
export class PostTeacherComponent implements OnInit {
  isSpinning : boolean=false;
  validateForm:FormGroup;
  gender:string='';
  constructor(private adminService:AdminService,
    private fb:FormBuilder,
  private snackbar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      name:[null,Validators.required],
      gender:[null,Validators.required],
      department:[null,Validators.required],
      qualification:[null,Validators.required],
      address:[null,Validators.required],
      dob:[null,Validators.required],
    })
  }
  postTeachers(){
    console.log(this.validateForm.value);
    this.adminService.addTeacher(this.validateForm.value).subscribe(
      (res)=>{
        if(res.id !=null){
            this.snackbar.open("Teacher Details Saved Succesfully","Close",{duration:2000});
            this.validateForm.reset();
        }else{
          this.snackbar.open("Something went wrong","Close",{duration:2000});
        }
      }
    )
  }

}
