import { Component, OnInit } from '@angular/core';
import { TopicService } from '../list-news/service/topic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
    newsId: string | undefined;
    dataNews: any;
    constructor(
        private topicService: TopicService,
        private route: ActivatedRoute,
    ) {
        this.route.paramMap.subscribe(params => {
            const newsId = params.get('id');
            this.newsId = newsId!;
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
                    //   this.listTopic = res.data;
                    this.dataNews =  res.data;
                      console.log(res.data);
                }
            }
        });
    }
}
