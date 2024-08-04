import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/modules/admin-service/admin.service';

@Component({
  selector: 'app-pay-fee',
  templateUrl: './pay-fee.component.html',
  styleUrls: ['./pay-fee.component.css']
})
export class PayFeeComponent implements OnInit {
  studentId:number=this.activatedRoute.snapshot.params['studentId'];
  isSpinning:boolean;
  validateForm:FormGroup;
  constructor(private service:AdminService,
    private activatedRoute:ActivatedRoute,
    private fb:FormBuilder,private snackBar:MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      amount:[null,Validators.required],
      month:[null,Validators.required],
      givenBy:[null,Validators.required],
      description:[null,Validators.required],
    })
  }

    MONTH:string[]=[
      "January","February","March","April","May","June","July","August","September",
      "October","November","December"
    ];

    payFee(){      
      this.service.payFee(this.studentId,this.validateForm.value).subscribe(
        (res)=>{
          console.log(res);
          if(res!=null){
            this.snackBar.open("Fee paid Succesfully","Close",{duration:1000});
          }
          else{
            this.snackBar.open("Something went wrong","Close",{duration:1000}); 
          }
        },)
    }
}
