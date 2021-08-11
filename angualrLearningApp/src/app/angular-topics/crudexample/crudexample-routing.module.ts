import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudexampleComponent } from './crudexample.component';

const routes: Routes = [{ path: '', component: CrudexampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudexampleRoutingModule { }
