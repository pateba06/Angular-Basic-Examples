import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableExampleServiceService } from '../observable-example-service.service';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentCComponent implements OnInit {

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
