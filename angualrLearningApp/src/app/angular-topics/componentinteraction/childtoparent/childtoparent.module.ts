import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildtoparentRoutingModule } from './childtoparent-routing.module';
import { ChildtoparentComponent } from './childtoparent.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ParentBComponent } from '../parenttochild/parent-b/parent-b.component';
import { ParentAComponent } from './parent-a/parent-a.component';


@NgModule({
  declarations: [
    ChildtoparentComponent,
    ChildAComponent,
    ParentAComponent
  ],
  imports: [
    CommonModule,
    ChildtoparentRoutingModule
  ]
})
export class ChildtoparentModule { }
