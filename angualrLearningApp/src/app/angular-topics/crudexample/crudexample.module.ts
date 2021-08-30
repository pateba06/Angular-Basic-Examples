import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudexampleRoutingModule } from './crudexample-routing.module';
import { CrudexampleComponent } from './crudexample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CrudexampleComponent
  ],
  imports: [
    CommonModule,
    CrudexampleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CrudexampleModule { }
