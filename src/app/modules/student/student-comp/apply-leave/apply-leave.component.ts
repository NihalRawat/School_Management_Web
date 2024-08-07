import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student-servie/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  isSpinning=false;
  validateForm!:FormGroup;

  constructor(private studentService:StudentService,
    private snackBar:MatSnackBar,
    private router:Router,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
        subject:[null,[Validators.required]],
        body:[null,[Validators.required]],
    })
  }

  applyLeave(){
    this.isSpinning=true;
    this.studentService.applyLeave(this.validateForm.value).subscribe(
      (res)=>{
        
        console.log(res);
        this.isSpinning=false;
        if(res.id!=null){
          this.snackBar.open('Leave submitted successfully','SUCCESS',{
            duration:1000
          })
          this.router.navigateByUrl('student/dashboard');
        }else{
          this.snackBar.open("Something went wrong",' ERROR',{
            duration:1000
            
          })
        }
      },(error)=>{
        
        console.log(error);
        this.isSpinning=false;
      })
    
  }

}
