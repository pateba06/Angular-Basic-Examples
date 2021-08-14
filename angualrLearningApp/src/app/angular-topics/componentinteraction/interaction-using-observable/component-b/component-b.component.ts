import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InteractionObservableService } from '../interaction-observable.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
})
export class ComponentBComponent implements OnInit, OnDestroy  {
  messageUsingSubject: any;
  messageUsingBehaviorSubject: any;
  subscription: Subscription;
  constructor(
    private interactionObservableService: InteractionObservableService
  ) {}

  ngOnInit() {
    // Example 1:Subscribing to subject to recieve data from component B
    this.subscription = this.interactionObservableService.subject.subscribe(
      (data) => {
        this.messageUsingSubject = data;
        // Example 2:Subscribing to Behaviorsubject to recieve data from component B
        this.subscription =
          this.interactionObservableService.behaviorSubject.subscribe(
            (data) => {
              this.messageUsingBehaviorSubject = data;
            }
          );
      }
    );
  }

  // We have to make sure we unsubscribe all the subscription
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
