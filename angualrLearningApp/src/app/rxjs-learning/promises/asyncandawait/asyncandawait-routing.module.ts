import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncandawaitComponent } from './asyncandawait.component';

const routes: Routes = [{ path: '', component: AsyncandawaitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncandawaitRoutingModule { }
