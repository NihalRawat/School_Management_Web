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
 

  // createAuthorizationHeader():HttpHeaders{
    
  //   let authHeaders:HttpHeaders=new HttpHeaders();
  //   return authHeaders.set(
  //     'Authorization',"Bearer" +StorageService.getToken()
  //   )
  // }
  private createAuthorizationHeader(): HttpHeaders {
    const token = StorageService.getToken();
    let authHeaders: HttpHeaders = new HttpHeaders();
    if (token) {
      authHeaders = authHeaders.set('Authorization', `Bearer ${token}`);
    }
    return authHeaders;
  }


}
