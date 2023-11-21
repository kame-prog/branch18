import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    AuthComponent,
   LoginComponent,
   SignInComponent
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { 
  constructor(){
    console.log('auth module works');
  }
}
