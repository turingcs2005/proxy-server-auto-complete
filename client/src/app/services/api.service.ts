import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getStateList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/proxy-api/geography/stateArray`);
  }

  getCityList(stateAbbr: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/proxy-api/geography/cityArray/${stateAbbr}`);
  }

}
