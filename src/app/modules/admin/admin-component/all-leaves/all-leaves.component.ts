import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/modules/admin-service/admin.service';

@Component({
  selector: 'app-all-leaves',
  templateUrl: './all-leaves.component.html',
  styleUrls: ['./all-leaves.component.css']
})
export class AllLeavesComponent implements OnInit {

    isSpinning :boolean=false;
    leaves:any;
  constructor(private adminService:AdminService,
    private snackBar:MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getAllLeaves();
  }
  getAllLeaves(){
    this.isSpinning=true;
    this.adminService.getAllAppliedLeaves().subscribe(
      (res)=>{
        console.log(res);
        this.isSpinning=false;
        this.leaves=res;
      }
    )
  }

  // changeLeaveStatus(leaveId:number,status:string){
  //   this.isSpinning=true;
  //   this.adminService.changeLeaveStatus(leaveId,status).subscribe(
  //     (res)=>{
  //       console.log(res);
  //       this.isSpinning=false;
  //       if(res.id !=null){
  //         this.snackBar.open('Leave Approved Successfull','success',{
  //           duration:2000
  //         });
  //         this.getAllLeaves();
  //       }else{
  //         this.snackBar.open("something went wrong",'ERROR',{
  //           duration:1000
  //         })
  //       }
  //     }
  //   )
  // }

}
