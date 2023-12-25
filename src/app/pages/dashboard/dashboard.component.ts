import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService,
    private _sanitizer: DomSanitizer) { }

  backgroundSrc: any;
  defaultSrc: string = 'assets/img/bg/frame-1-resize.png';

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this.dashboardService.getBackgroundImg().subscribe({
      next: (res) => {
        if (res.success) {
          this.backgroundSrc = this.convertToImg(res?.data?.image)
        } else {
          this.backgroundSrc = this.defaultSrc;
        }
      },
      error: () => {
        this.backgroundSrc = this.defaultSrc;
      }
    })
  }

  convertToImg(stringBase: string): SafeUrl {
    const imageUrl = stringBase;
    return this._sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  handleImageError(e: Event) {
    const imgElement = e.target as HTMLImageElement;
    imgElement.src =  this.defaultSrc;
}

}
