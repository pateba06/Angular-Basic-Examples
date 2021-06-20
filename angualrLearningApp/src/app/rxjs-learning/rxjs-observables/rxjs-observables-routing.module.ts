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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsObservablesRoutingModule {}
