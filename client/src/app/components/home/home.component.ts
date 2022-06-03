import { Component, OnInit } from '@angular/core';
import { sharedTools } from 'src/app/app-data/shared-tools';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sharedTools = sharedTools;
  
  constructor() { }

  ngOnInit(): void {
  }

}
