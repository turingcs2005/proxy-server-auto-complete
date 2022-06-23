import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-example',
  templateUrl: './spinner-example.component.html',
  styleUrls: ['./spinner-example.component.scss']
})
export class SpinnerExampleComponent implements OnInit {

  display = true; 

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.display = !this.display;
  }

}
