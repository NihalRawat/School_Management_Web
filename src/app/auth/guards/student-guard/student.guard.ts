import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../service/storage-service/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private router:Router,private snackbar:MatSnackBar,private StorageService:StorageService){}
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean{
  if( this.StorageService.isAdminLoggedIn()){
    this.router.navigateByUrl("/admin/dashboard")
    this.snackbar.open("You don't have access to this page","Close",{duration:5000});
    return false;
  }
  else if(!this.StorageService.hasToken()){
    this.StorageService.logout();
    this.router.navigateByUrl("/login");
    this.snackbar.open("You aren't logged In","Close",{duration:5000});
    return false;
  }
  return true;
  }
}
