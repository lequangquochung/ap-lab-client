import { Component, OnInit } from '@angular/core';
import { TechNewsService } from './service/tech-news.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tech-news',
    templateUrl: './tech-news.component.html',
    styleUrls: ['./tech-news.component.scss']
})
export class TechNewsComponent implements OnInit {
    data: any;
    dataMobile: any;
    firstNews: any;
    constructor(
        private router: Router,
        private _sanitizer: DomSanitizer,
        private techNewsService: TechNewsService
    ) {

    }
    ngOnInit(): void {
        this.getAllTechNews();
     }

    getAllTechNews() {
        const payload = {
            pageIndex: 1,
            take: 4
        }
        this.techNewsService.getListTopic(payload).subscribe({
            next: (res) => {
                if (res.success) {
                    this.dataMobile = res.data;
                    this.data = res.data.map((item: any) => {
                        item.thumbnail = this.convertToImg(item.thumbnail);
                        return item;
                    });
                    this.firstNews = this.data[0];
                    this.data = this.data.slice(1);
                }
            }
        })
    }

    convertToImg(stringBase: string): SafeUrl {
        const imageUrl = stringBase;
        return this._sanitizer.bypassSecurityTrustUrl(imageUrl);
    }

    clickToDetailNews(id: string){
        this.router.navigate([`topic/${id}`]);
    }

}
