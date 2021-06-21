import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntervalAndTimerRoutingModule } from './interval-and-timer-routing.module';
import { IntervalAndTimerComponent } from './interval-and-timer.component';


@NgModule({
  declarations: [
    IntervalAndTimerComponent
  ],
  imports: [
    CommonModule,
    IntervalAndTimerRoutingModule
  ]
})
export class IntervalAndTimerModule { }
