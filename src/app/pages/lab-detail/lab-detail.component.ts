import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabDetailContentService } from './service/lab-detail.service';

@Component({
  selector: 'app-lab-detail',
  templateUrl: './lab-detail.component.html',
  styleUrls: ['lab-detail.component.scss']
})
export class LabDetailComponent implements OnInit {
  detailId: string = ''
  data: any;
  constructor(private route: ActivatedRoute,
    private labDetailContentService: LabDetailContentService) {
    this.route.paramMap.subscribe(params => {
      const detailId = params.get('id');
      this.detailId = detailId!;
    });
  }
  ngOnInit(): void {
    this.getDetailById(this.detailId);
  }

  getDetailById(id: string) {
    this.labDetailContentService.getById(id).subscribe({
      next: (res) => {
        if (res.success) {
          this.data = res.data;
        }
      }
    })
  }

}
