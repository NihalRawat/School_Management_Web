import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/service/storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

keys:string='http://localhost:8083/';

  constructor(private http:HttpClient) { }
 
  private createAuthorizationHeader(): HttpHeaders {
    const token = StorageService.getToken();
    let authHeaders: HttpHeaders = new HttpHeaders();
    if (token) {
      authHeaders = authHeaders.set('Authorization', `Bearer ${token}`);
    }
    return authHeaders;
  }

  getStudentById():Observable<any>{
    return this.http.get<[]>(this.keys+`api/student/${StorageService.getUserId()}`,{
      headers:this.createAuthorizationHeader()
    })
  }
}
