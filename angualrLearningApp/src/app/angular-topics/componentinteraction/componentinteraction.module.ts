import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentinteractionRoutingModule } from './componentinteraction-routing.module';
import { ComponentinteractionComponent } from './componentinteraction.component';


@NgModule({
  declarations: [
    ComponentinteractionComponent
  ],
  imports: [
    CommonModule,
    ComponentinteractionRoutingModule
  ]
})
export class ComponentinteractionModule { }
