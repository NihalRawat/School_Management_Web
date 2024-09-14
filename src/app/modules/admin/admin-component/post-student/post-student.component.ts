import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/modules/admin-service/admin.service';


@Component({
  selector: 'app-post-student',
  templateUrl: './post-student.component.html',
  styleUrls: ['./post-student.component.css']
})
export class PostStudentComponent implements OnInit {

  constructor(private service:AdminService,
    private fb:FormBuilder,private snackbar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      email:['',Validators.required],
      name:['',Validators.required],
      password:['',Validators.required],
      checkPassword:['',Validators.required],
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

  isSpinning:boolean;
  validateForm:FormGroup;

  postStudent(){
    console.log(this.validateForm.value);
    if (this.validateForm.valid) {

    this.service.addStudent(this.validateForm.value).subscribe((res)=>{      
      console.log("called");
      if(res.id!=null){
        this.validateForm.reset();
         // Clear validation errors for each form control
    Object.keys(this.validateForm.controls).forEach(key => {
      this.validateForm.controls[key].setErrors(null);
    });
this.snackbar.open("Student created","Close",{duration:1000})
this.isSpinning=false;
            
      }
      else{
        this.isSpinning=false;
        this.snackbar.open("studen exsits","Close",{duration:1000})
      }
    })
  }
  else{ 
    
    this.snackbar.open("First fill the details properly","Close",{duration:5000})
  }
  }

    confirmationValidator=(control:FormControl):{[s:string]:boolean}=>{
      if(!control.value){
        return {required:true};
      }else if(control.value !==this.validateForm.controls["password"].value){
        return {confirm:true,error:true}
      }
      return {};
    }

 
    
}
