import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { keys } from 'src/app/constants/keys';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _keys:keys,private http:HttpClient) { }

  addStudent(){
    return this.http.post<[]>(this._keys.BASIC_URL+"api/admin/student",studentDto);
  }

}
