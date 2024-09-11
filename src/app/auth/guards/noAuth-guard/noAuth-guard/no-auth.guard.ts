import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/service/storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router:Router,private StorageService:StorageService){}
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean{
  if(this.StorageService.hasToken() && this.StorageService.isStudentLoggedIn()){
    this.router.navigateByUrl("/student/dashboard")
    return false;
  }
  else if(this.StorageService.hasToken() && this.StorageService.isAdminLoggedIn()){
    this.router.navigateByUrl("admin/dashboard");
    return false;
  }
  return true;
  }

}
