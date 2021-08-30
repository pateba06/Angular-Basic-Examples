
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CrudserviceService } from './angular-topics/crudexample/crudservice.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedServicesService } from './services/shared-services.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedServicesService,CrudserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
