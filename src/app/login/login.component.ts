import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/service/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../auth/service/storage-service/storage.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityServiceService } from '../auth/service/utility/utility-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup | undefined
  constructor(
    private authService:AuthService,    
    private fb:FormBuilder,
    private router:Router,
    private snackbar:MatSnackBar,
    
  ) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }
  login(){
    console.log(this.loginForm.value);
    this.authService.login(
    this.loginForm.get(['email'])!.value,
    this.loginForm.get(['password'])!.value,
  ).subscribe(
      (response)=>{
      console.log(response);
      if(StorageService.isAmdinLoggedIn()){
        this.router.navigateByUrl("admin/dashboard");
          this.snackbar.open("Welcome Admin","Success",{duration:3000});
      }
      else if(StorageService.isStudentLoggedIn()){
        this.router.navigateByUrl("student/dashboard");
      }
    },
    (error)=>{
      if(error.status==406){
        this.snackbar.open("User is not active","Close",{
          duration:5000
        });        
      }
      else{
        this.snackbar.open("Wrong Password or Email","Close",{
          duration:5000
        });        
      }
      // console.log("user invalid");
    });
  }
  
}
