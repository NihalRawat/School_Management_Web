import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { StorageService } from 'src/app/auth/service/storage-service/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
//error in keys  private _keys:Keys
  constructor(private http:HttpClient,private storageService:StorageService) { }
  keys:string='http://localhost:8083/';

  addStudent(studentDto:any):Observable<any>{
    return this.http.post<[]>(this.keys+"api/admin/student",studentDto,{
      headers:this.createAuthorizationHeader(),
    });
  }
 
  getAllStudents():Observable<any>{
    
    return this.http.get<[]>(this.keys + "api/admin/students",{
        headers:this.createAuthorizationHeader()
    })
  }
  private createAuthorizationHeader(): HttpHeaders {
    const token = this.storageService.getToken();
    let authHeaders: HttpHeaders = new HttpHeaders();
    if (token) {
      authHeaders = authHeaders.set('Authorization', `Bearer ${token}`);
    }
    return authHeaders;
  }
  //delete Student's 
  deleteStudent(studentId:any):Observable<any>{
    return this.http.delete<[]>(this.keys+`api/admin/students/${studentId}`,
      {
        headers:this.createAuthorizationHeader()
      }
    )}

    getStudentById(studentId:number):Observable<any>{
      return this.http.get<[]>(this.keys+`api/admin/students/${studentId}`,{
        headers:this.createAuthorizationHeader()
      }        
      )
    }
    updateStudent(studentId:number,studentDto:any):Observable<any>{
      return this.http.put<[]>(this.keys+`api/admin/students/${studentId}`,studentDto,{
        headers:this.createAuthorizationHeader()
      })
    }

    payFee(studentId:number,feeDto:any):Observable<any>{  
        
      return this.http.post<[]>(this.keys+`api/admin/fee/${studentId}`,feeDto,{
        headers:this.createAuthorizationHeader()        
      })
      
    }
    getAllAppliedLeaves():Observable<any>{
      return this.http.get<[]>(this.keys+`api/admin/leaves`,{
        headers:this.createAuthorizationHeader()
      })
    }

    changeLeaveStatus(leaveId:number,status:string):Observable<any>{
      return this.http.get<[]>(this.keys + `api/admin/leaves/${leaveId}/${status}`,
      {
          headers:this.createAuthorizationHeader()
      })
    }

    // Teacher's 
    addTeacher(teacherDto:any):Observable<any>{
      return this.http.post<[]>(this.keys+"api/admin/teacher",teacherDto,{
        headers:this.createAuthorizationHeader(),
      });
    }

    getAllTeachers():Observable<any>{
    
      return this.http.get<[]>(this.keys + "api/admin/teachers",{
          headers:this.createAuthorizationHeader()
      })
    }
    deleteTeacher(teacherId:number):Observable<any>{
      return this.http.delete<[]>(this.keys + `api/admin/teachers/${teacherId}`,{
        headers :this.createAuthorizationHeader(),  
      });
    }

    getTeacherById(teacherId:number):Observable<any>{
      return this.http.get<[]>(this.keys+`api/admin/teacher/${teacherId}`,{
        headers:this.createAuthorizationHeader()
      }        
      )
    }
    getCountsTSL():Observable<any>{       
      return this.http.get<[]>(this.keys+"api/amdin/get-count",{
        headers:this.createAuthorizationHeader()
      })
    }
    
    updateTeacher(teacherId:number,teacherDto:any):Observable<any>{
      return this.http.put<[]>(this.keys+`api/admin/teacher/${teacherId}`,teacherDto,{
        headers:this.createAuthorizationHeader()
      })
    }

   
        
    
}
