import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/service/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup | undefined
  constructor(
    private authService:AuthService,
    private fb:FormBuilder
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
    ).subscribe((response)=>{
      console.log(response);
    })
  }
  
}
