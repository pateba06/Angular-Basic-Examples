import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularTopicsRoutingModule } from './angular-topics-routing.module';
import { AngularTopicsComponent } from './angular-topics.component';
import { CrudserviceService } from './crudexample/crudservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AngularTopicsComponent
  ],
  imports: [
    CommonModule,
    AngularTopicsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CrudserviceService],
})
export class AngularTopicsModule { }
