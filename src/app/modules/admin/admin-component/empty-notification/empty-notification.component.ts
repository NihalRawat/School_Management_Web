import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-notification',
  templateUrl: './empty-notification.component.html',
  styleUrls: ['./empty-notification.component.css']
})
export class EmptyNotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() message:string;
  @Input() path:any;
}
