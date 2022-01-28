import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CustomerComponent } from './customer/customer.component';
import { DelivererComponent } from './deliverer/deliverer.component';
import { SettingComponent } from './setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking', component: DataTableComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'diliverer', component: DelivererComponent },
  { path: 'setting', component: SettingComponent },
  { path: '**', component: PageNotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
