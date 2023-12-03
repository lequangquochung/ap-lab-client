import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  clickScrollToDiv(): void {
    console.log('click');
    let element = document.getElementById('aboutUs');
    console.log(element);
    
    
    document.getElementById('aboutUs')?.scrollIntoView({ behavior: 'smooth' });
  }
}
