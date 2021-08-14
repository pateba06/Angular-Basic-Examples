import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionUsingObservableComponent } from './interaction-using-observable.component';

const routes: Routes = [{ path: '', component: InteractionUsingObservableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionUsingObservableRoutingModule { }
