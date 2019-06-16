import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashScreenComponent } from './flash-screen/flash-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketComponent } from './market/market.component';
import { AboutComponent } from './about/about.component';
import { AllocationsComponent } from './allocations/allocations.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {
    MatFormFieldModule, MatTabsModule, MatCheckboxModule, MatSidenavModule, MatTableModule, MatSelectModule, MatSliderModule,
    MatButtonModule, MatIconModule, MatListModule, MatToolbarModule, MatCardModule, MatInputModule, MatMenuModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SummaryComponent } from './summary/summary.component';
import { ChartComponent } from './chart/chart.component';
import { RiskProfileComponent } from './risk-profile/risk-profile.component';
import { TransactionProfileComponent } from './transaction-profile/transaction-profile.component';
import { QuestionComponent } from './question/question.component';
import { HomeChildModule } from './home/home-child.module';
// import { HomeChildRoutingModule } from './home/HomeChildRoutingModule';

@NgModule({
  declarations: [
    AppComponent,
    FlashScreenComponent,
    DashboardComponent,
    MarketComponent,
    AboutComponent,
    AllocationsComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ConfigComponent,
    ProfileComponent,
    HomeComponent,
    SummaryComponent,
    ChartComponent,
    RiskProfileComponent,
    TransactionProfileComponent,
    QuestionComponent,

  ],
    imports: [
        // HomeChildRoutingModule,
        BrowserModule,
        AppRoutingModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatFormFieldModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        ChartsModule,
        NgbModule.forRoot(),
        MatMenuModule,
        FontAwesomeModule,
        MatTabsModule,
        MatTableModule,
        MatSelectModule,
        MatSliderModule,
        HomeChildModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
