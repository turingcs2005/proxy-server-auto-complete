import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { MenuAndButtonComponent } from './menu-and-button/menu-and-button.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExamplesComponent,
    MenuAndButtonComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule
  ]
})
export class ExamplesModule { }
