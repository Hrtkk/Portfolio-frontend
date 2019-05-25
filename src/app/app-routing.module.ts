import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashScreenComponent } from './flash-screen/flash-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MarketComponent } from './market/market.component';
import { AboutComponent } from './about/about.component';
import { AllocationsComponent } from './allocations/allocations.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: FlashScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '',
    redirectTo: 'zettamine',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },  
  { path: 'profile', component: ProfileComponent },
  { path: 'market', component: MarketComponent },
  { path: 'allocation', component: AllocationsComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
