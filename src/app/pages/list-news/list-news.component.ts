import { Component, OnInit } from '@angular/core';
import { TopicService } from './service/topic.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { ITopicResponse } from '../service-detail/model/ITopicResponse';

@Component({
    selector: 'app-list-news',
    templateUrl: './list-news.component.html',
    styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
    listTopic: any[] = [];
    imagePath: any;
    totalRecords: number = 0;
    rows: number = 10;
    constructor(
        private router: Router,
        private topicService: TopicService,
        private _sanitizer: DomSanitizer
    ) { }
    ngOnInit(): void {
        this.getListTopic();
    }

    getListTopic() {
        const payload = {
            pageIndex: 1,
            take: 10
        }
        this.topicService.getListTopic(payload).subscribe({
            next: (res) => {
                if (res.success) {
                    this.totalRecords = res.totalItems;
                    this.listTopic = res.data.map((item: any) => {
                        item.thumbnail = this.convertToImg(item.thumbnail);
                        return item;
                    });
                }
            }
        });
    }

    convertToImg(stringBase: string): SafeUrl {
        const imageUrl = stringBase;
        return this._sanitizer.bypassSecurityTrustUrl(imageUrl);
    }

    clickToDetailNews(id: string){
        this.router.navigate([`topic/${id}`]);
    }
    paginate(e: any){
        console.log(e); 
        this.listTopic = [];
        let payload = {
            pageIndex: e.page + 1,
            take: 10
        }
        this.topicService.getListTopic(payload).subscribe({
            next: (res) => {
                if (res.success) {
                    this.totalRecords! = res?.totalItems!;
                    this.listTopic = res.data.map((item: any) => {
                        item.thumbnail = this.convertToImg(item.thumbnail);
                        return item;
                    });
                }
            }
        });
        
    }
}

