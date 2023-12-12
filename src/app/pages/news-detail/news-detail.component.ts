import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TopicService } from '../list-news/service/topic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, AfterViewChecked {
    @ViewChild('contentHtml') input? :ElementRef; 
    newsId: string | undefined;
    dataNews: any;
    constructor(
        private topicService: TopicService,
        private route: ActivatedRoute,
        private element: ElementRef
    ) {
        this.route.paramMap.subscribe(params => {
            const newsId = params.get('id');
            this.newsId = newsId!;
        });
    }
    ngAfterViewChecked(): void {
        const nativeElement = this.element.nativeElement;
        let imgs  = nativeElement.querySelectorAll('img')
        imgs.forEach((element: any) => {
            element.setAttribute('style', 'width: 100%', 'height: 100%');
        });
    }
  
    ngOnInit(): void {
        this.getListTopic();
    }

    getListTopic() {
        const payload = {
            pageIndex: 1,
            take: 10
        }
        this.topicService.getTopicDetail(this.newsId).subscribe({
            next: (res) => {
                if (res.success) {
                    this.dataNews = res.data;
                }
            }
        });
    }
}
