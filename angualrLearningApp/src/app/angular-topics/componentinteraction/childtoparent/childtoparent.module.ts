import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildtoparentRoutingModule } from './childtoparent-routing.module';
import { ChildtoparentComponent } from './childtoparent.component';


@NgModule({
  declarations: [
    ChildtoparentComponent
  ],
  imports: [
    CommonModule,
    ChildtoparentRoutingModule
  ]
})
export class ChildtoparentModule { }
