import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/modules/admin-service/admin.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {  
  constructor(private service:AdminService,
    private activatedRoute:ActivatedRoute,
    private fb:FormBuilder,
    private snackbar:MatSnackBar
  ) { }

  studentId:number=this.activatedRoute.snapshot.params['studentId']
  validateForm:FormGroup;
  isSpinning:boolean;


  ngOnInit(): void {
   this.getStudentById();
   this.validateForm=this.fb.group({
    email:['',Validators.required],
    name:['',Validators.required],   
    fatherName:['',Validators.required],
    motherName:['',Validators.required],
    studentName:['',Validators.required],
    dateOfBirth:['',Validators.required],
    address:['',Validators.required],
    gender:['',Validators.required],
    studentClass:['',Validators.required]

  })
  }
  CLASS:string[]=[
    "Play","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"
  ];

  GENDER:string[]=[
    "Male","Female","Not Specified"
  ];
  getStudentById(){
      this.service.getStudentById(this.studentId).subscribe((res)=>{
        const student=res.studentDto;
        this.validateForm.patchValue(student);
        console.log(res);
      })
  }
  updateStudent(){
      this.service.updateStudent(this.studentId,this.validateForm.value).subscribe(
        (res)=>{
          console.log(res);
         if(res.id!=null){
          this.snackbar.open("Student Updated Successfully","Close",{duration:1000})
         }
         else{
          this.snackbar.open("Student not found","Close",{duration:1000})
         }
        }
      )
  }
}
