import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labservice',
  templateUrl: './labservice.component.html',
  styleUrls: ['./labservice.component.scss']
})
export class LabserviceComponent implements OnInit {
  
  listService = [
    {id: 1, name: 'GIẢI PHẪU BỆNH'},
    {id: 2, name: 'HUYẾT HỌC ĐÔNG MÁU'},
    {id: 3, name: 'KÝ SINH TRÙNG'},
    {id: 4, name: 'MIỄN DỊCH'},
    {id: 5, name: 'NƯỚC TIỂU'},
    {id: 6, name: 'Sàng lọc chẩn đoán trước sinh và sơ sinh'},
  ] ;

  ngOnInit(): void {
  }

}
