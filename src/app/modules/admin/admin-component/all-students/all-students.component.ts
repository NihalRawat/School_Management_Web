import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';
import { AdminService } from 'src/app/modules/admin-service/admin.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  
  students:any[]=[];
  constructor(private service:AdminService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  // getAllStudents(){    
  //   this.service.getAllStudents().subscribe(
  //     (res)=>{      
  //       console.log(res)            
  //   })
  // } 

    loading:boolean=false;

  // getAllStudents() {
  //   this.loading=true;
  //   this.service.getAllStudents().subscribe({
  //     next: (res) => {
       
  //       console.log(res);
  //       this.students=res;
        
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       console.log('Error fetching students:', error);
        
  //     }
      
  //   });
  //   this.loading=false;
  // }
  getAllStudents() {
    this.loading=true;
    this.service.getAllStudents().subscribe({
      next: (res) => {
       if(res){
        console.log(res);
        this.students=res;
       }else{
        console.log("error");
       }    
       this.loading=false; 
      }
     
      
    });   
    
  }

  deleteStudent(studentId:number){
    this.service.deleteStudent(studentId).subscribe((res)=>{      
        this.getAllStudents();  
        this.snackbar.open("Student deleted successfully","Close",{duration:1000})  
    })
    
  }
  




}
