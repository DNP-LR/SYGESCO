import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./auth/auth/login/login.component";
import {MainComponent} from "./main/main.component";
import {RegistrationComponent} from "./auth/auth/registration/registration.component";
import {NavComponent} from "./Dashboard/nav/nav.component";
import {AdminSettingComponent} from "./Dashboard/admin-setting/admin-setting.component";
import {DashComponent} from "./Dashboard/dash/dash.component";

const routes: Routes = [
  {
    path: '', component: MainComponent, pathMatch: 'full'
  },
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: '/registration', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {
    path: 'dashboard-nav', component : NavComponent,
    children:[
      {
        path: '', redirectTo: '/dashboard-nav', pathMatch: 'full'
      },
      {path: '', title: 'Main Component',  component: DashComponent},
      {path: 'dashboard-nav', component: DashComponent},
      {path: 'admin-settings', title: 'Main Component',  component: AdminSettingComponent},
      {
        path: 'dashboard-nav', loadChildren: () => import ('./Dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
