import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParenttochildRoutingModule } from './parenttochild-routing.module';
import { ParenttochildComponent } from './parenttochild.component';


@NgModule({
  declarations: [
    ParenttochildComponent
  ],
  imports: [
    CommonModule,
    ParenttochildRoutingModule
  ]
})
export class ParenttochildModule { }
