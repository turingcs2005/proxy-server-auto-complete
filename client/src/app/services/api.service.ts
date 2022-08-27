import { Injectable } from '@angular/core';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  codec = new HttpUrlEncodingCodec();
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

  // We need to encode URL because some city names have space or other special characters (e.g. Fall River)
  getZipCodeList(stateAbbr: string, city: string): Observable<any> {
    const url = this.codec.encodeValue(`${this.baseUrl}/proxy-api/geography/zipCodeArray/${stateAbbr}/${city}`);
    // console.log(url);
    return this.http.get(url);
  }

}
