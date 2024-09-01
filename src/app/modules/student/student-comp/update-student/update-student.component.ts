import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/modules/admin-service/admin.service';
import { StudentService } from '../../student-servie/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(
    private fb:FormBuilder,private snackbar:MatSnackBar,
    private studentService:StudentService
  ) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      email:['',Validators.required],
      name:['',Validators.required],     
      fatherName:['',Validators.required],
      motherName:['',Validators.required],
      studentName:['',Validators.required],
      dob:['',Validators.required],
      address:['',Validators.required],
      gender:['',Validators.required],
      studentClass:['',Validators.required]

    })
    this.getStudentById();
  
  }
  CLASS:string[]=[
    "Play","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"
  ];

  GENDER:string[]=[
    "Male","Female","Not Specified"
  ];

  isSpinning:boolean;
  validateForm:FormGroup;

 getStudentById(){
  this.studentService.getStudentById().subscribe((res)=>{
    console.log(res);
    const student=res.studentDto;
    this.validateForm.patchValue(student);
  })
 }

    

    updateStudent(){
      this.isSpinning=true;
      this.studentService.updateStudent(this.validateForm.value).subscribe(
        (res)=>{
          console.log(res);
          this.isSpinning=false;
          if(res.id !=null ){
            this.snackbar.open('Record updated succesfully','close',{
              duration:5000
            })
            this.getStudentById();
          }
          else{
            this.snackbar.open("Student not found","Close",{
              duration:5000
            });
          }
        }
      )
    }

}
