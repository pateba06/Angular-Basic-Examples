import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudexampleRoutingModule } from './crudexample-routing.module';
import { CrudexampleComponent } from './crudexample.component';


@NgModule({
  declarations: [
    CrudexampleComponent
  ],
  imports: [
    CommonModule,
    CrudexampleRoutingModule
  ]
})
export class CrudexampleModule { }
