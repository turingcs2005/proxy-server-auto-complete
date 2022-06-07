import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormToolsService {

  constructor() { }

  findInvalidControls(f: FormGroup ) {
    const invalid = [];
    const controls = f.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }

    // display a list of invalid control names on console
    console.log(invalid);

    return invalid;
  }

  // recursively replace currency strings ($) with parsed numbers
  currencyStringToNumberTree(o: any) {
    if (o) {
      for ( let [key, value] of Object.entries(o) ) {
        if (value && typeof value === 'string' && /^\$([1-9][0-9]{0,2}(\,[0-9]{3})*|0)$/.test(value)) {
          o[key] = parseInt(value.replace(/\D/g, ''), 10);

        } else {
          // recursion: function calls itself
          if (o[key] && typeof o[key] === 'object') {
            this.currencyStringToNumberTree(o[key]);
          }
        }
      }
    }
  }


}
