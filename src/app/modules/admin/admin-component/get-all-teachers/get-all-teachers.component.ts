import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/modules/admin-service/admin.service';

@Component({
  selector: 'app-get-all-teachers',
  templateUrl: './get-all-teachers.component.html',
  styleUrls: ['./get-all-teachers.component.css']
})
export class GetAllTeachersComponent implements OnInit {

  teachers:any[]=[];
  loading:boolean=false;

  constructor(private adminService:AdminService) { }
  @ViewChild('closeModal') closeModal!: ElementRef;

  @ViewChild('deleteModal') deleteModal!: ElementRef;

  ngOnInit(): void {
    this.getAllTeachers();
  }
  getAllTeachers(){
    this.loading=true;
    this.adminService.getAllTeachers().subscribe(
      (res)=>{
        if(res){
          console.log(res);
        this.loading=true;
        this.teachers=res;
        }
        this.loading=false;
            
      }      
    )
    
  }
  teacherId:number;
  deleteTeacher(id:number){
    this.teacherId=id;
   
  }
  confirmDelete(){
    this.adminService.deleteTeacher(this.teacherId).subscribe(
      (res)=>{
          console.log(this.teacherId);
          this.deleteModal.nativeElement.click();
          this.getAllTeachers();
      }
    )
  }

}
