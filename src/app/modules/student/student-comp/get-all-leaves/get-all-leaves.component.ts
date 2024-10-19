import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student-servie/student.service';

@Component({
  selector: 'app-get-all-leaves',
  templateUrl: './get-all-leaves.component.html',
  styleUrls: ['./get-all-leaves.component.css']
})
export class GetAllLeavesComponent implements OnInit {

    isSpinning=false;
    leaves:any[]=[];
    loading:boolean=false;

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getAllLeaves();
  }

  getAllLeaves(){
    this.loading=true;
    this.studentService.getAllAppliedLeaves().subscribe(
      (res)=>{
        if(res){
          console.log(res);          
          this.leaves=res;
        }
        this.loading=false;
       
      }
    )
  }
}
