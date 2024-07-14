import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/service/storage-service/storage.service';
import { keys } from 'src/app/constants/keys';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _keys:keys,private http:HttpClient) { }

  addStudent(studentDto:any):Observable<any>{
    return this.http.post<[]>(this._keys.BASIC_URL+"api/admin/student",studentDto,{
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
