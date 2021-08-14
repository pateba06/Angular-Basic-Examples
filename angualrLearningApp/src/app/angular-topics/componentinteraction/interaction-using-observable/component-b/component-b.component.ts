import { Component, OnInit } from '@angular/core';
import { InteractionObservableService } from '../interaction-observable.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
})
export class ComponentBComponent implements OnInit {
  messageUsingSubject: any;
  messageUsingBehaviorSubject: any;

  constructor(
    private interactionObservableService: InteractionObservableService
  ) {}

  ngOnInit() {
    // Example 1:Subscribing to subject to recieve data from component B
    this.interactionObservableService.subject.subscribe((data) => {
      this.messageUsingSubject = data;
    // Example 2:Subscribing to Behaviorsubject to recieve data from component B
    this.interactionObservableService.behaviorSubject.subscribe((data) =>{
      this.messageUsingBehaviorSubject = data;
    })
    });
  }
}
