import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionUsingObservableRoutingModule } from './interaction-using-observable-routing.module';
import { InteractionUsingObservableComponent } from './interaction-using-observable.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';


@NgModule({
  declarations: [
    InteractionUsingObservableComponent,
    ComponentAComponent,
    ComponentBComponent
  ],
  imports: [
    CommonModule,
    InteractionUsingObservableRoutingModule
  ]
})
export class InteractionUsingObservableModule { }
