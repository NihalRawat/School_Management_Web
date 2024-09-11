import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/service/storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

keys:string='http://localhost:8083/';

  constructor(private http:HttpClient,private StorageService:StorageService) { }
 
  private createAuthorizationHeader(): HttpHeaders {
    const token = this.StorageService.getToken();
    let authHeaders: HttpHeaders = new HttpHeaders();
    if (token) {
      authHeaders = authHeaders.set('Authorization', `Bearer ${token}`);
    }
    return authHeaders;
  }

  getStudentById():Observable<any>{
    return this.http.get<[]>(this.keys+`api/student/${this.StorageService.getUserId()}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  applyLeave(studentLeaveDto):Observable<any>{
    studentLeaveDto.userId=this.StorageService.getUserId();
    console.log(studentLeaveDto);
    return this.http.post<[]>(this.keys+`api/student/leave`,studentLeaveDto,{
      headers:this.createAuthorizationHeader()
    })
    
    
  }
  getAllAppliedLeaves():Observable<any>{
    return this.http.get<[]>(this.keys+`api/student/leave/${this.StorageService.getUserId()}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  updateStudent(studentLeaveDto):Observable<any>{
    studentLeaveDto.userId = this.StorageService.getUserId();
    return this.http.put<[]>(this.keys + `api/student/${this.StorageService.getUserId()}`,studentLeaveDto,{
      headers:this.createAuthorizationHeader()
    })
  }
}
