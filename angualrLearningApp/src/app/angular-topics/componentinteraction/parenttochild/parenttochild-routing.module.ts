import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParenttochildComponent } from './parenttochild.component';

const routes: Routes = [{ path: '', component: ParenttochildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParenttochildRoutingModule { }
