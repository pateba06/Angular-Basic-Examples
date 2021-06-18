import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning.component';

const routes: Routes = [{ path: '', component: RxjsLearningComponent }, { path: 'promises', loadChildren: () => import('./promises/promises.module').then(m => m.PromisesModule) }, { path: 'observables', loadChildren: () => import('./rxjs-observables/rxjs-observables.module').then(m => m.RxjsObservablesModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsLearningRoutingModule { }
