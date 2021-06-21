import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfFromRxjsOperatorRoutingModule } from './of-from-rxjs-operator-routing.module';
import { OfFromRxjsOperatorComponent } from './of-from-rxjs-operator.component';


@NgModule({
  declarations: [
    OfFromRxjsOperatorComponent
  ],
  imports: [
    CommonModule,
    OfFromRxjsOperatorRoutingModule
  ]
})
export class OfFromRxjsOperatorModule { }
