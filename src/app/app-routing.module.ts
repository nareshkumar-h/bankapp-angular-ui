import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterUserComponent},
  {path:'listusers', component:ListusersComponent},
  {path:'viewuser/:id', component:ViewUserComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
