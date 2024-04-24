import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/components/login/login.component';
import { RegisterComponent } from './feature/components/register/register.component';
import { DashboardComponent } from './feature/components/dashboard/dashboard.component';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "register",
    component:RegisterComponent
  },
  {
    path : "",
    component:DashboardComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
