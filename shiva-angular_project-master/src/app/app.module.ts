import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginIntegratedComponent } from './login-integrated/login-integrated.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hi_IN } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import hi from '@angular/common/locales/hi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { AuthGuard } from './guard/auth.guard';
import { UsersDataService } from './services/users-data.service';
import { CreateUserComponent } from './create-user/create-user.component';



registerLocaleData(hi);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginIntegratedComponent,
    ForgotPasswordComponent,   
    CreateUserComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    WelcomeModule,
    // FormGroup,
    
  ],
 
  providers: [AuthGuard,UsersDataService, { provide: NZ_I18N, useValue: hi_IN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
