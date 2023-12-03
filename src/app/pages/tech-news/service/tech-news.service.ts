import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { IResponseData } from "../../models/response-data.model";

@Injectable({
    providedIn: 'root'
})
export class TechNewsService {
    apiBaseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public getListTopic(param?: any): Observable<IResponseData<any>> {
        let params = new HttpParams()
            .set('pageIndex', param.pageIndex)
            .set('take', param.take);
        return this.http.get<any>(`${this.apiBaseUrl}/topic`, { params });
    }
}