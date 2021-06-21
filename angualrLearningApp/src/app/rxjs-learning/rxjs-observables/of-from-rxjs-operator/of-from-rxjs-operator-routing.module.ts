import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfFromRxjsOperatorComponent } from './of-from-rxjs-operator.component';

const routes: Routes = [{ path: '', component: OfFromRxjsOperatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfFromRxjsOperatorRoutingModule { }
