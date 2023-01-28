import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  apiBase: string = 'https://v6.exchangerate-api.com/v6/6bcf017e115d5cdc0f8da578/';

  constructor(private http: HttpClient) { }

  getLatestRates(baseSymbol: string): Observable<any>
  {
    return this.http.get(`${this.apiBase}latest/${baseSymbol}`)
  }

}
