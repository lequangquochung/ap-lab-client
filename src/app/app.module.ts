import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LabserviceComponent } from './pages/labservice/labservice.component';
import { ReviewLabComponent } from './pages/review-lab/review-lab.component';
import { CarouselModule } from 'primeng/carousel';
import { TechNewsComponent } from './pages/tech-news/tech-news.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    AboutUsComponent,
    LabserviceComponent,
    ReviewLabComponent,
    TechNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
