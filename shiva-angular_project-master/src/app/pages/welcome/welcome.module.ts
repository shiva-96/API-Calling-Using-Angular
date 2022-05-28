import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { ListusersComponent } from './listusers/listusers.component';
import { ViewUsersComponent } from './view-users/view-users.component';

import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    // FormGroup,
    FormsModule,
   
  ],

  declarations: [
    ListusersComponent,
    ViewUsersComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,   
  ],

  exports: [
    ListusersComponent,
    ViewUsersComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent, 

  ]
})
export class WelcomeModule { }
