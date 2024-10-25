import { ChangeDetectorRef, Component } from '@angular/core';
import { StorageService } from './auth/service/storage-service/storage.service';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';

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
  
  // checking here the status for online and offline
  onlineEvent:Observable<Event>;
  offlineEvent:Observable<Event>;
  subscriptionList:Subscription[]=[];
  connectionStatusMessage :string;
  connectionStatus : string;

  constructor(private router:Router,private cdRef: ChangeDetectorRef,private storageService: StorageService){}
  

  ngOnInit() {
    this.onlineEvent=fromEvent(window,'online');
    this.offlineEvent=fromEvent(window,'offline');
    this.subscriptionList.push(this.onlineEvent.subscribe(e=>{
      this.connectionStatusMessage = 'You are Back Online';
      this.connectionStatus = 'online';
    }))

    this.subscriptionList.push(this.offlineEvent.subscribe(e=>{
        this.connectionStatusMessage = 'Connection lost! You are not connected to internet';
        this.connectionStatus = 'offline';
    }))

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
    //unscribing the event 
    this.subscriptionList.forEach(subscription=>subscription.unsubscribe());
  }

}
