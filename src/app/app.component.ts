import { ChangeDetectorRef, Component } from '@angular/core';
import { StorageService } from './auth/service/storage-service/storage.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stduent-Management-System';

  isAdminLoggedIn: boolean;
  isStudentLoggedIn: boolean;
  subscription: Subscription;
  
  constructor(private router:Router,private cdRef: ChangeDetectorRef,private storageService: StorageService){}
  // ngOnInit(){
  //   this.updateUserLoggedStatus();
  //   this.router.events.subscribe(events=>{
  //     if(event instanceof NavigationEnd){
  //       this.updateUserLoggedStatus();
  //     }
  //   })
  // }

  // private updateUserLoggedStatus():void{
  //   this.isAdminLoggedIn=StorageService.isAmdinLoggedIn();
  //   this.isStudentLoggedIn=StorageService.isStudentLoggedIn();
  // }
  // logout(){
  //   StorageService.logout();
  //   this.router.navigateByUrl("/login");
  // }

  ngOnInit() {
    this.updateUserLoggedStatus();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateUserLoggedStatus();
      }
    });

    // Subscribe to login status changes
    this.subscription = this.storageService.loginStatusChanged().subscribe(() => {
      this.updateUserLoggedStatus();
    });
  }

  private updateUserLoggedStatus(): void {
    this.isAdminLoggedIn = this.storageService.isAdminLoggedIn();
    this.isStudentLoggedIn = this.storageService.isStudentLoggedIn();
    this.cdRef.detectChanges();  // Ensure change detection occurs
  }

  logout() {
    this.storageService.logout();
    this.router.navigateByUrl("/login");
  }

  ngOnDestroy() {
    // Unsubscribe from the observable to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
