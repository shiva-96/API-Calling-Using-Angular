import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from 'src/app/create-user/create-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListusersComponent } from './listusers/listusers.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  // {path: 'welcome/createuser', component:CreateUserComponent},
  { path: '',   
    children:[
      {path:'', redirectTo:'allUsers', pathMatch:'full' },
      {path:'allUsers', component:ListusersComponent},
      {path:'view/:id', component:ViewUsersComponent},
      {path:'delete/:id', component:DeleteUserComponent},
      {path:'edit/:id', component:EditUserComponent},
      {path:'addUser', component:AddUserComponent,},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
