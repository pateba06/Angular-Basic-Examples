import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableExampleServiceService } from '../observable-example-service.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  message:any;
  subscription: Subscription;

  constructor(private messageService : ObservableExampleServiceService) {
    this.subscription = this.messageService
    .getMessage()
    .subscribe((message)=>{
      this.message = message;
    })
  }

  ngOnInit() {
  }

}
