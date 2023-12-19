import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IResponseData } from "../../models/response-data.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class ReviewLabService {
    apiBaseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public getAllPhoto(): Observable<IResponseData<any>> {
        return this.http.get<any>(`${this.apiBaseUrl}/lab-image`);
      }
}