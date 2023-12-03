import { Component, OnInit } from '@angular/core';
import { LabDetailService } from './service/lab-detail.service';
import { ILabDetailResponse } from './model/ITopicResponse';

@Component({
    selector: 'app-service-detail',
    templateUrl: './service-detail.component.html',
    styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
    data: ILabDetailResponse[] = [];
    constructor(private labDetailService: LabDetailService) {

    }
    ngOnInit(): void {
        this.getAllDetail();
    }

    // get isShowService(): boolean {
    //     return this.detail.length;
    // }

    getAllDetail() {
        this.labDetailService.getAllDetail().subscribe({
            next: (res)=> {
                if(res.success){
                    this.data = res.data;
                    this.data = this.data.filter(item => item.details.length);
                    console.log(this.data);
                    
                }
            }
        })
    }

}
