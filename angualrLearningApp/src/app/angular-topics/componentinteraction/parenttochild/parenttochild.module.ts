import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParenttochildRoutingModule } from './parenttochild-routing.module';
import { ParenttochildComponent } from './parenttochild.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ParentBComponent } from './parent-b/parent-b.component';


@NgModule({
  declarations: [
    ParenttochildComponent,ChildBComponent,ParentBComponent
  ],
  imports: [
    CommonModule,
    ParenttochildRoutingModule
  ]
})
export class ParenttochildModule { }
