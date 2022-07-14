import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { DisplayType } from '../app-data/app-models';
import { CurrencyPipe } from '@angular/common';
import { UntypedFormGroup } from '@angular/forms';
=======
import { CurrencyPipe } from '@angular/common';
>>>>>>> 6e1f2f89745c30205ecc66d8cdff47c608c8be79

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  snackBarText = '';
  currencyCheck = DisplayType.currencyCheck;
  dateCheck = DisplayType.dateCheck;
  
  constructor(
    private currencyPipe: CurrencyPipe
  ) { }

<<<<<<< HEAD
  // convert zero, null, undefined, '', false to zero
=======
>>>>>>> 6e1f2f89745c30205ecc66d8cdff47c608c8be79
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

<<<<<<< HEAD
  /**
   * after loading a name-value pair from database, patch the value to a reactive form
   */
  patchValueToFormGroup (fg: UntypedFormGroup, name: string, value: any) {
    if ((<UntypedFormGroup>fg).contains(name)) {
      if (this.currencyCheck(name)) {    // if value is currency, convert from number to currency string before patching value
        fg.get(name)!.setValue(this.toCurrency(value));  
      } else if (this.dateCheck(name)) { // if value is date, convert from string to date before patching value
        fg.get(name)!.setValue(this.toDate(value));
      }else {                            // anything else, patch value straight
        fg.get(name)!.setValue(value);
      }
    }
  }

=======
>>>>>>> 6e1f2f89745c30205ecc66d8cdff47c608c8be79
}
