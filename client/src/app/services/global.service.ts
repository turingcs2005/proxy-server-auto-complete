import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  snackBarText = '';
  
  constructor(
    private currencyPipe: CurrencyPipe
  ) { }

  toZero(val: any) {
    return val ? val : 0;
  }

  toNumber(val: string) {
    if (val) {
      // remove all none-digit characters; remove all leading zeroes
      return parseInt(val.replace(/\D/g, '').replace(/^0*/, ''), 10);
    } else {
      return 0;
    }
  }

  toCurrency(val: any) {
    if (val) {
      return this.currencyPipe.transform(val.toString().replace(/\D/g, '').replace(/^0{2,}/, '0'), 'USD', 'symbol', '1.0-0');
    } else {
      return '$0';
    }
  }

  toDate(val: any) {
    if (val) {
      return new Date(val);
    } else {
      return null;
    }
  }

}
