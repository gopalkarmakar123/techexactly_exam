import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CoreModule } from '../core/core.module';
import { RegisterComponent } from './components/register/register.component';
import { PasswordVisibilityDirective } from './password-visibility.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordVisibilityDirective,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule
  ],
})
export class FeatureModule { }
