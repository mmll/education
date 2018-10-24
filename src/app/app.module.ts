import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyOwnCustomMaterialModule } from './materialModule'

import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './component/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './component/alert/alert.component';
import { AppComponent } from './component/app.component';

import {AlertService} from './service/alert.service';
import {UserService} from './service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MyOwnCustomMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
