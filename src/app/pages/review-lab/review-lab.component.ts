import { Component, OnInit } from '@angular/core';
import { ReviewLabService } from './service/review-lab.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-review-lab',
    templateUrl: './review-lab.component.html',
    styleUrls: ['./review-lab.component.scss']
})
export class ReviewLabComponent implements OnInit {
    constructor(
        private reviewLabService: ReviewLabService,
        private _sanitizer: DomSanitizer
    ){

    }
    products: any;
    responsiveOptions: any[] | undefined;
    ngOnInit(): void {
        this.getAllPhoto();
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getAllPhoto() {
        this.reviewLabService.getAllPhoto().subscribe({
            next: (res) => {
                if(res.success) {
                    this.products = res.data.map((item:any)=>{
                        item.image = this.convertToImg(item.image);
                        return item;
                    })
                }
            }
        })
    }

    convertToImg(stringBase: string): SafeUrl {
        const imageUrl = stringBase;
        return this._sanitizer.bypassSecurityTrustUrl(imageUrl);
    }

}
