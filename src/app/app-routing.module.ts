import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { ListNewsComponent } from './pages/list-news/list-news.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'lab-services',
        component: ServiceDetailComponent
    },
    {
        path: 'topic',
        component: ListNewsComponent
    }
    ,
    {
        path: 'topic/:id',
        component: NewsDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
