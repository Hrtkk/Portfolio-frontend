import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileComponent } from '../profile/profile.component';
import { MarketComponent } from '../market/market.component';
import { AllocationsComponent } from '../allocations/allocations.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'profile', component: ProfileComponent },
          { path: 'market', component: MarketComponent },
          { path: 'allocation', component: AllocationsComponent },
          { path: 'about', component: AboutComponent },
          { path: 'dashboard', component: DashboardComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeChildRoutingModule { }
