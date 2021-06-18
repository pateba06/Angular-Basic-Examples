import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularTopicsRoutingModule } from './angular-topics-routing.module';
import { AngularTopicsComponent } from './angular-topics.component';


@NgModule({
  declarations: [
    AngularTopicsComponent
  ],
  imports: [
    CommonModule,
    AngularTopicsRoutingModule
  ]
})
export class AngularTopicsModule { }
