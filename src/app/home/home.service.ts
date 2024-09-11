import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const keys='http://localhost:8083/';
@Injectable({
  providedIn: 'root'
})


export class HomeService {
  
  
  constructor(private http:HttpClient) { }
  getAllTeacher():Observable<any>{
    return this.http.get(keys+"teachers");
      
  }


}
