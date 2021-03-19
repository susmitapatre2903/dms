import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'login'},
  { path:'login', component: LogInComponent},
  {path:'register', component: RegisterComponent},
  {path:'home',component: SidenavComponent},
  {path:'user', loadChildren:() => import('./models/user/user.module').then(m => m.UserModule)},
  {path:'department',loadChildren:()=>import('./models/department/department.module').then(m=>m.DepartmentModule)},
  {path:'designation',loadChildren:()=>import('./models/designation/designation.module').then(m=>m.DesignationModule)},
  {path:'groups',loadChildren:()=>import('./models/group/group.module').then(m =>m.GroupModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
