import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildtoparentComponent } from './childtoparent.component';

const routes: Routes = [{ path: '', component: ChildtoparentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildtoparentRoutingModule { }
