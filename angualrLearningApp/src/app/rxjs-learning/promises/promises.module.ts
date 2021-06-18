import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromisesRoutingModule } from './promises-routing.module';
import { PromisesComponent } from './promises.component';


@NgModule({
  declarations: [
    PromisesComponent
  ],
  imports: [
    CommonModule,
    PromisesRoutingModule
  ]
})
export class PromisesModule { }
