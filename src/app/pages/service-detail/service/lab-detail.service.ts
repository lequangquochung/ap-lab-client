import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { IResponseData } from "../../models/response-data.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class LabDetailService {
    apiBaseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public getAllDetail(): Observable<IResponseData<any>> {
        return this.http.get<any>(`${this.apiBaseUrl}/lab-service/detail`);
      }
}