import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableandobserversRoutingModule } from './observableandobservers-routing.module';
import { ObservableandobserversComponent } from './observableandobservers.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ObservableExampleServiceService } from './observable-example-service.service';


@NgModule({
  declarations: [
    ObservableandobserversComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent
  ],
  imports: [
    CommonModule,
    ObservableandobserversRoutingModule
  ],
  providers: [
  ObservableExampleServiceService
  ]
})
export class ObservableandobserversModule { }
