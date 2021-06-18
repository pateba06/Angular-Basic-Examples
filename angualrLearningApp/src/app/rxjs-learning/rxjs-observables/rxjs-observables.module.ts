import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsObservablesRoutingModule } from './rxjs-observables-routing.module';
import { RxjsObservablesComponent } from './rxjs-observables.component';


@NgModule({
  declarations: [
    RxjsObservablesComponent
  ],
  imports: [
    CommonModule,
    RxjsObservablesRoutingModule
  ]
})
export class RxjsObservablesModule { }
