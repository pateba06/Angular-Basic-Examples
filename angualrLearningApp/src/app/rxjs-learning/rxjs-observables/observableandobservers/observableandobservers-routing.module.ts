import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableandobserversComponent } from './observableandobservers.component';

const routes: Routes = [{ path: '', component: ObservableandobserversComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableandobserversRoutingModule { }
