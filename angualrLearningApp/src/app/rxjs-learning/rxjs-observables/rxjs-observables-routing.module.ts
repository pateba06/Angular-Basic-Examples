import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsObservablesComponent } from './rxjs-observables.component';

const routes: Routes = [
  { path: '', component: RxjsObservablesComponent },

  {
    path: 'from-event',
    loadChildren: () =>
      import('./from-event/from-event.module').then((m) => m.FromEventModule),
  },
  {
    path: 'rxjs-interval-timer',
    loadChildren: () =>
      import('./interval-and-timer/interval-and-timer.module').then(
        (m) => m.IntervalAndTimerModule
      ),
  },
  { path: 'switch-map', loadChildren: () => import('./switch-map/switch-map.module').then(m => m.SwitchMapModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsObservablesRoutingModule {}
