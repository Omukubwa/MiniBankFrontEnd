import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetTokenComponent } from './components/reset-token/reset-token.component';
import { ResetPinComponent } from './components/reset-pin/reset-pin.component';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ResetTokenComponent,
    ResetPinComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ]
})
export class AuthModule { }
