import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { CustomerComponent } from './customer/customer.component';
import { DelivererComponent } from './deliverer/deliverer.component';
import { SettingComponent } from './setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'bookingForm', component: BookingFormComponent },
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
