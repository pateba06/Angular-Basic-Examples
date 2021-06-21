import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalAndTimerComponent } from './interval-and-timer.component';

const routes: Routes = [{ path: '', component: IntervalAndTimerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntervalAndTimerRoutingModule { }
