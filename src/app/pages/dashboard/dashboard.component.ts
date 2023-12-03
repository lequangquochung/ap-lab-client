import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor() {

  }
  clickToElement() {
    const element = document.getElementById('aboutUs');
    element?.scrollIntoView({ behavior: "smooth" });
  }
}
