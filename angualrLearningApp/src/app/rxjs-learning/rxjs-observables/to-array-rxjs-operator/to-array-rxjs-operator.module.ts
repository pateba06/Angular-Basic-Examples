import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToArrayRxjsOperatorRoutingModule } from './to-array-rxjs-operator-routing.module';
import { ToArrayRxjsOperatorComponent } from './to-array-rxjs-operator.component';


@NgModule({
  declarations: [
    ToArrayRxjsOperatorComponent
  ],
  imports: [
    CommonModule,
    ToArrayRxjsOperatorRoutingModule
  ]
})
export class ToArrayRxjsOperatorModule { }
