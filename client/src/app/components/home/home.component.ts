import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  intakeForm: FormGroup = new FormGroup({});
  
  stateList: string[] = [''];
  cityList: string[] = [''];
  zipCodeList: string[] = [''];

  filteredStateOptions: Observable<string[]>;
  filteredCityOptions: Observable<string[]>;
  filteredZipCodeOptions: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    // form group
    this.intakeForm = this.fb.group({
      state: [''],
      city: [''],
      zipCode: ['']
    });

    // get state list via API call
    this.api.getStateList().subscribe(
      {
        next: v => {this.stateList = v.states.map( (x: any) => x.abbr).filter( (x: string) => x.length === 2)},
        error: e => {console.error(e)},
        complete: () => {console.info('State list acquisition complete.')}
      }
    );

    this.intakeForm.get('state')?.valueChanges.subscribe({
      next: v => {
        // if state is a valid US state
        if (this.stateList.includes(v)) {
          // get city list via API call
          this.api.getCityList(v).subscribe(
            {
              next: data => { 
                this.cityList = data.cities; 
              },
              error: e => {console.error(e)},
              complete: () => {console.info(`City list acquisition for ${v} complete.`)}
            }
          )
        }
      },
      error: e => {console.error(e)},
      complete: () => {console.info('State value changed.')}
    });

    this.intakeForm.get('city')?.valueChanges.subscribe({
      next: v => {
        // if state is a valid US state and city is a valid US city
        if (this.stateList.includes(this.intakeForm.get('state')?.value) && this.cityList.includes(v)) {
          this.api.getZipCodeList(this.intakeForm.get('state')?.value, v).subscribe(
            {
              next: data => {
                this.zipCodeList = data.zip_codes;
              },
              error: e => {console.error(e)},
              complete: () => {console.info(`ZIP code list acquisition for ${v} complete.`)}
            }
          )
        }
      },
      error: e => {console.error(e)},
      complete: () => {console.info('City value changed.')}
    });

    this.filteredCityOptions = this.intakeForm.get('city')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCity(value || '')),
    );

    this.filteredStateOptions = this.intakeForm.get('state')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterState(value || '')),
    );
    
    this.filteredZipCodeOptions = this.intakeForm.get('zipCode')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterZipCode(value || '')),
    );


  }

  private _filterState(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.stateList.filter(option => option.toLowerCase().startsWith(filterValue));
  }

  private _filterCity(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cityList.filter(option => option.toLowerCase().startsWith(filterValue));
  }

  private _filterZipCode(value: string): string[] {
    const filterValue = value;
    return this.zipCodeList.filter(option => option.startsWith(filterValue));
  }

  onSubmit() {
    console.log('Data sent to database...');
  }

}
