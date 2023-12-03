import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IResponseData } from '../../models/response-data.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LabServiceContentService {

  apiBaseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getListLabService(): Observable<IResponseData<any>> {
    return this.http.get<any>(`${this.apiBaseUrl}/lab-service`);
  }
}
 