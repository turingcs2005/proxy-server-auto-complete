import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-and-button',
  templateUrl: './menu-and-button.component.html',
  styleUrls: ['./menu-and-button.component.scss']
})
export class MenuAndButtonComponent implements OnInit {

  hidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  mouseOver() {
    this.hidden = false;
  }

  mouseOut() {
    this.hidden = true;
  }

}
