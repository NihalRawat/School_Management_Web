import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student-servie/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  student:any;
  loading:boolean=false;
  //can also create a modal for student 
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.getStudentById();
  }
    getStudentById(){
      this.loading=true;
      this.service.getStudentById().subscribe(
        (res)=>{
          if(res){
            this.student=res.studentDto;
          }
          this.loading=false;
        }
      )
    }
}
