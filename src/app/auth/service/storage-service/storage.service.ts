

// import { Injectable } from '@angular/core';

// const USER='c_user';
// const TOKEN='c_token';

// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {
  

//   constructor() { }

//   public saveUser(user:any){
//     window.localStorage.removeItem(USER);
//     window.localStorage.setItem(USER,JSON.stringify(user))
//   }
//   public saveToken(token:string){
//     window.localStorage.removeItem(TOKEN);
//     window.localStorage.setItem(TOKEN,token);
//   }
//   static getToken():string{
//     return window.localStorage.getItem(TOKEN);

//   }
//   static hasToken():boolean{
//     if(this.getToken==null){
//       return false;
//     }
//     return true;
//   }
//   static getUser():any{
//     return JSON.parse(localStorage.getItem(USER));
    
//   }
//   static getUserRole():string{
//     const user=this.getUser();
//     if(user==null){
//       return '';
//     }
//     return user.role;
//   }
 
//   static isAmdinLoggedIn():boolean{
//     if(this.getToken() == null){
//       return false;
      
//     }
   
//     const role:string=this.getUserRole();
//     return role=="ADMIN";
//   }
//   static isStudentLoggedIn():boolean{
//     if(this.getToken() == null){
//       return false;
//     }
//     const role:string=this.getUserRole();
//     return role=="STUDENT";
//   }
//   static logout() {
//     window.localStorage.removeItem(TOKEN);
//     window.localStorage.removeItem(USER);
    
//   }
//   static getUserId(){
//     const user=this.getUser();
//     if(user==null) {
//       console.log('no id found');
//       return '';
//     }
//     return user.userId;
//   }

// }
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const USER = 'c_user';
const TOKEN = 'c_token';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveUser(user: any) {
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  public saveToken(token: string) {
    window.localStorage.setItem(TOKEN, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN);
  }

  public hasToken(): boolean {
    return this.getToken() !== null;
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }

  public getUserRole(): string {
    const user = this.getUser();
    return user ? user.role : '';
  }

  public isAdminLoggedIn(): boolean {
    const token = this.getToken();
    const role = this.getUserRole();
    return token !== null && role === "ADMIN";
  }

  public isStudentLoggedIn(): boolean {
    const token = this.getToken();
    const role = this.getUserRole();
    return token !== null && role === "STUDENT";
  }

  public logout() {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }

  public getUserId(): string {
    const user = this.getUser();
    return user ? user.userId : '';
  }

  // Optional: Add an observable to notify login status changes
  private loginStatusChangedSubject = new Subject<void>();

  loginStatusChanged(): Observable<void> {
    return this.loginStatusChangedSubject.asObservable();
  }

  notifyLoginStatusChanged() {
    this.loginStatusChangedSubject.next();
  }
}
