import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LabserviceComponent } from './pages/labservice/labservice.component';
import { ReviewLabComponent } from './pages/review-lab/review-lab.component';
import { CarouselModule } from 'primeng/carousel';
import { TechNewsComponent } from './pages/tech-news/tech-news.component';
import { NavFooterComponent } from './pages/nav-footer/nav-footer.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { ListNewsComponent } from './pages/list-news/list-news.component';
import { HttpClientModule } from '@angular/common/http';

import {PaginatorModule} from 'primeng/paginator';
import { LabDetailComponent } from './pages/lab-detail/lab-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    AboutUsComponent,
    LabserviceComponent,
    ReviewLabComponent,
    TechNewsComponent,
    NavFooterComponent,
    EmployeesComponent,
    NewsDetailComponent,
    ServiceDetailComponent,
    ListNewsComponent,
    LabDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
