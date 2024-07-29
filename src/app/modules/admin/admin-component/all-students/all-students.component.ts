import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AdminService } from 'src/app/modules/admin-service/admin.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  // getAllStudents(){    
  //   this.service.getAllStudents().subscribe(
  //     (res)=>{      
  //       console.log(res)            
  //   })
  // } 

  getAllStudents() {
    this.service.getAllStudents().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching students:', error);
       
      }
    });
  }
  




}
