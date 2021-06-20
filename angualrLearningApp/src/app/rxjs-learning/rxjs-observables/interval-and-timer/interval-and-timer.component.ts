import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { interval } from 'rxjs';
import { SharedServicesService } from 'src/app/services/shared-services.service';

@Component({
  selector: 'app-interval-and-timer',
  templateUrl: './interval-and-timer.component.html',
  styleUrls: ['./interval-and-timer.component.css'],
})
export class IntervalAndTimerComponent implements OnInit {
  constructor(private sharedService: SharedServicesService) {}

  // Example 1 variable
  obsMessage;
  // Example 2 vairable
  obsMessageTimer;

  subscription: Subscription;

  ngOnInit(): void {
    /************    // Example 1 --- Interval ********************************************************************/
    // using rxjs Interval it will create data stream
    const broadCastVideos = interval(2000);
    // Subscribing to broadCastVideos -- where rxjs interval will get data every 2 sec
    broadCastVideos.subscribe((res) => {
      console.log(res);
      this.obsMessage = 'video' + res;
      this.sharedService.elAppend(this.obsMessage, 'elContainer');

      // unsubscribing the subscription after data stream is 5.
      if (res >= 5) {
        this.subscription.unsubscribe;
      }
    });

    /************    // Example 2 --- Timer ********************************************************************/
    // timer has two aregumenet timer(delay,interval)
    const broadCastVideosTimer = timer(5000,1000);
       // Subscribing to broadCastVideos -- where rxjs interval will get data every 2 sec
       broadCastVideosTimer.subscribe((res) => {
        console.log(res);
        this.obsMessageTimer = 'video' + res;
        this.sharedService.elAppend(this.obsMessageTimer, 'elContainertimer');
  
        // unsubscribing the subscription after data stream is 5.
        if (res >= 5) {
          this.subscription.unsubscribe;
        }
      });
  }
}
