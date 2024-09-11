import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:HomeService) { }
  teachers:any[]=[];

  ngOnInit(): void {
    this.getAllTeacher();
  }
  getAllTeacher(){
    this.service.getAllTeacher().subscribe(
      (res)=>{
        console.log(res);
        this.teachers = res;
      })
  }

}
