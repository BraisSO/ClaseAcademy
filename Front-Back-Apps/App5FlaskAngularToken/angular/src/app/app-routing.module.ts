import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardGuard } from './guards/dashboard.guard';

const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
