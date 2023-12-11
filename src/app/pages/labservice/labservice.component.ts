import { Component, OnInit } from '@angular/core';
import { LabServiceContentService } from './service/labservicecontent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labservice',
  templateUrl: './labservice.component.html',
  styleUrls: ['./labservice.component.scss']
})
export class LabserviceComponent implements OnInit {

  serviceData: any[] = [];

  constructor(
    private router: Router,
    private labServiceContentService: LabServiceContentService
  ) {

  }
  ngOnInit(): void {
    this.getListLabService();
  }

  getListLabService() {
    this.labServiceContentService.getListLabService().subscribe({
      next: (res) => {
        this.serviceData = res.data;
      }
    })
  }

  clickToServiceDetail(id: string) {
    this.router.navigate([`lab-detail/${id}`]);
  }

}
