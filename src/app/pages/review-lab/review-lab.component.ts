import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-review-lab',
    templateUrl: './review-lab.component.html',
    styleUrls: ['./review-lab.component.scss']
})
export class ReviewLabComponent implements OnInit {
    products: any = []
    responsiveOptions: any[] | undefined;
    ngOnInit(): void {
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

        this.products = [
            {
                name: 'hung',
                src: '/assets/img/caro/caro-3.png'
            },
            {
                name: 'huz',
                src: 'https://fl-img-media.s3.amazonaws.com/uploads/2020/11/Logo-only.png'
            },
            {
                name: 'huz',
                src: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww'
            },
            {
                name: 'huz',
                src: 'https://media.istockphoto.com/id/1210681509/fr/photo/les-mains-de-femme-placent-ensemble-comme-priant-devant-le-fond-de-ciel-de-coucher-du-soleil.jpg?s=170667a&w=0&k=20&c=xYmFB7HORtzk_Y9N3yuYwNOc9dp5wduG1DU9bRWzk0k='
            }
        ]
    }

}
