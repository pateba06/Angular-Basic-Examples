import { Component, OnInit, ViewChild } from '@angular/core';
import { InteractionObservableService } from '../interaction-observable.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  constructor( private interactionObservableService :InteractionObservableService) { }

  ngOnInit() {
  }

 /**
  * Example 1:Sending Message using Subject to Component B. 
  */
  sendMessageSubject(data) {
    // send message to subscribers via observable subject
    this.interactionObservableService.sendMessageUsingSubject(data.value);
  } 

  /**
  * Example 2:Sending Message using BehaviorSubject to Component B. 
  */
  sendMessageBehaviorSubject(data){
// send message to subscribers via observable Behavior Subject
    this.interactionObservableService.sendMessageUsingBehaviorSubject(data.value)
  }
}
