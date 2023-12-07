import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
    data: any[] = [];
    constructor(private employeeService: EmployeeService,
        private _sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.getListEmployee();
    }

    getListEmployee() {
        this.employeeService.getListEmployee().subscribe({
            next:(res) => {
                if (res.success){
                    this.data = res.data.map((item: any) => {
                        item.thumbnail = this.convertToImg(item.thumbnail);
                        return item;
                    });
                }
            }
        })
    }

    convertToImg(stringBase: string): SafeUrl {
        const imageUrl = stringBase;
        return this._sanitizer.bypassSecurityTrustUrl(imageUrl);
    }

}
