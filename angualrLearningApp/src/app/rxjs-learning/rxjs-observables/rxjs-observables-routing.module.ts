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
  {
    path: 'switch-map',
    loadChildren: () =>
      import('./switch-map/switch-map.module').then((m) => m.SwitchMapModule),
  },
  {
    path: 'of-from-rxjs-operator',
    loadChildren: () =>
      import('./of-from-rxjs-operator/of-from-rxjs-operator.module').then(
        (m) => m.OfFromRxjsOperatorModule
      ),
  },
  {
    path: 'to-array-rxjs-operator',
    loadChildren: () =>
      import('./to-array-rxjs-operator/to-array-rxjs-operator.module').then(
        (m) => m.ToArrayRxjsOperatorModule
      ),
  },
  { path: 'observablesandobservers', loadChildren: () => import('./observableandobservers/observableandobservers.module').then(m => m.ObservableandobserversModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsObservablesRoutingModule {}
