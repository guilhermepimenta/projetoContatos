import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataComponent } from './user-data/user-data.component';

import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './services/account.service';
import { TokenService } from './services/token.service';

import { TokenInterceptor } from './interceptors/Token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AccountService, 
              TokenService,
              {provide:  HTTP_INTERCEPTORS,
              useClass: TokenInterceptor,
              multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }


