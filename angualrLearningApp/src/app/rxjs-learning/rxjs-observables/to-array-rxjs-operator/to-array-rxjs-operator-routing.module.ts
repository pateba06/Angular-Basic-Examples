import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToArrayRxjsOperatorComponent } from './to-array-rxjs-operator.component';

const routes: Routes = [{ path: '', component: ToArrayRxjsOperatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToArrayRxjsOperatorRoutingModule { }
