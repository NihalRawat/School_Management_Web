import { Component, OnInit } from '@angular/core';
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

  getAllStudents(){
    this.service.getAllStudents().subscribe((res)=>{
      console.log(res);
    })
  } 

}
