import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './Component/login/login.component'
import{DashboardComponent} from './Component/dashboard/dashboard.component'

const route: Routes = [
  {path:'dashboard', component:DashboardComponent},
  { path: 'login', component: LoginComponent },
  {path:'' , redirectTo:'/login',pathMatch:'full'}
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)

  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
