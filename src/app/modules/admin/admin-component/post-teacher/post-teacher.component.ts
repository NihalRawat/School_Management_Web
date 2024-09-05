import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/modules/admin-service/admin.service';

@Component({
  selector: 'app-post-teacher',
  templateUrl: './post-teacher.component.html',
  styleUrls: ['./post-teacher.component.css']
})
export class PostTeacherComponent implements OnInit {

  validateFrom:FormGroup;
  constructor(private adminService:AdminService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.validateFrom=this.fb.group({
      name:[null,Validators.required],
      gender:[null,Validators.required],
      department:[null,Validators.required],
      qualification:[null,Validators.required],
      address:[null,Validators.required],
      dob:[null,Validators.required],
    })
  }

}
