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

  constructor() { }

  ngOnInit(): void {
  }

}