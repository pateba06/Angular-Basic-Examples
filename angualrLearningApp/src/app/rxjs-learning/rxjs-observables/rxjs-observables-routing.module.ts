import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsObservablesComponent } from './rxjs-observables.component';

const routes: Routes = [{ path: '', component: RxjsObservablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsObservablesRoutingModule { }
