import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTopicsComponent } from './angular-topics.component';

const routes: Routes = [{ path: '', component: AngularTopicsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularTopicsRoutingModule { }
