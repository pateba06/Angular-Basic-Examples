import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsLearningRoutingModule } from './rxjs-learning-routing.module';
import { RxjsLearningComponent } from './rxjs-learning.component';


@NgModule({
  declarations: [
    RxjsLearningComponent
  ],
  imports: [
    CommonModule,
    RxjsLearningRoutingModule
  ]
})
export class RxjsLearningModule { }
