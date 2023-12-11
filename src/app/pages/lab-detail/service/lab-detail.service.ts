import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { IResponseData } from "../../models/response-data.model";

@Injectable({
    providedIn: 'root'
  })
  export class LabDetailContentService {
    apiBaseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { } 


  getById(id: string): Observable<IResponseData<any>> {
    return this.http.get<any>(`${this.apiBaseUrl}/cms/lab-service/${id}`);
  }
    
}