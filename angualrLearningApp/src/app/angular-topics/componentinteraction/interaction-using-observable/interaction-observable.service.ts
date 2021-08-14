import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InteractionObservableService {
  // Example 1:Using Subject Observable to communicate between components
  public subject = new Subject<any>();
  // Example 2: Using Behavior Subject to communicate between components
  public behaviorSubject = new BehaviorSubject<any>('Default Message Behavior Subject')
  constructor() {}

  /**
  * Example 1:Send Message using Subject
  */
  sendMessageUsingSubject(data) {
    this.subject.next(data);
  }

  /**
  * Example 2:Send Message using BehaviorSubject
  */
  sendMessageUsingBehaviorSubject(data){
    this.behaviorSubject.next(data)
  }
}
