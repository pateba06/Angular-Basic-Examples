import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentinteractionComponent } from './componentinteraction.component';

const routes: Routes = [{ path: '', component: ComponentinteractionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentinteractionRoutingModule { }
