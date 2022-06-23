import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @Input() label = '';
  @Input() toolTip = '';
  @Input() size = 'medium-input';
  @Input() control = new FormControl();
  @Input() show = true;
  @Input() triggerDateControl: FormControl = new FormControl();  // when value of trigger date change, current date will change
  @Input() dateChangeAmount: string = '1 year'; // by default, date is changed to one year after trigger date
  
  constructor() { }

  ngOnInit(): void {
    
        // 🔥🔥🔥🔥🔥 If trigger date changes, increment current date by 1 year.
        if (this.triggerDateControl && this.dateChangeAmount === '1 year') {
          this.triggerDateControl.valueChanges.subscribe( val => {
            if (val) {
              let year = this.triggerDateControl.value.getFullYear() + 1;
              let month = this.triggerDateControl.value.getMonth();
              let day = this.triggerDateControl.value.getDate();
    
              if (month === 1 && day === 29) { // JavaScript Date object's month starts at 0, ends at 11, so month 1 is February.
                month += 1; day = 1;  // if trigger date is Feb. 29, current date needs to be set to Mar. 1st.
              }
    
              this.control.setValue(
                new Date(year, month, day)
              );
            }
          });
        }
  }

}