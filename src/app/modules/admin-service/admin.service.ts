import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/service/storage-service/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
//error in keys  private _keys:Keys
  constructor(private http:HttpClient) { }
  keys:string='http://localhost:8083/';

  addStudent(studentDto:any):Observable<any>{
    return this.http.post<[]>(this.keys+"api/admin/student",studentDto,{
      headers:this.createAuthorizationHeader(),
    });
  }
  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders=new HttpHeaders();
    return authHeaders.set(
      'Authorization',"Bearer" +StorageService.getToken()
    )
  }

}
