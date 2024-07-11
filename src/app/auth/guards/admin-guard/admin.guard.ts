import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../service/storage-service/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router,private snackbar:MatSnackBar){}
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean{
  if( StorageService.isStudentLoggedIn()){
    this.router.navigateByUrl("/student/dashboard")
    this.snackbar.open("you don't have access to this page","Close",{duration:5000});
    return false;
  }
  else if(!StorageService.hasToken()){
    this.router.navigateByUrl("/login");
    this.snackbar.open("You are not loggedIN","Close",{duration:5000})
    return false;
  }
  return true;
  }
  
}
