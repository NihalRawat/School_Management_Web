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
    private service:AuthService,
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
    this.service.login(this.loginForm.value).subscribe((response)=>{
      console.log(response);
    })
  }
  
}
