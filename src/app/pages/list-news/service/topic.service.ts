import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { IResponseData } from "../../models/response-data.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TopicService {
    apiBaseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public getListTopic(param?: any): Observable<any> {
        let params = new HttpParams()
            .set('pageIndex', param.pageIndex)
            .set('take', param.take);
        return this.http.get<any>(`${this.apiBaseUrl}/topic`, { params });
    }

    public getTopicDetail(id?: string): Observable<IResponseData<any>> {
        return this.http.get<any>(`${this.apiBaseUrl}/topic/${id}`);
    }
}