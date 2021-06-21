import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncandawaitRoutingModule } from './asyncandawait-routing.module';
import { AsyncandawaitComponent } from './asyncandawait.component';


@NgModule({
  declarations: [
    AsyncandawaitComponent
  ],
  imports: [
    CommonModule,
    AsyncandawaitRoutingModule
  ]
})
export class AsyncandawaitModule { }
