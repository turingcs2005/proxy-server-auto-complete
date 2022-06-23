import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgColorScaleModule } from 'ng-color-scale';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { MenuAndButtonComponent } from './menu-and-button/menu-and-button.component';
import { SharedModule } from '../shared/shared.module';
import { SnackBarExampleComponent } from './snack-bar-example/snack-bar-example.component';
import { SpinnerExampleComponent } from './spinner-example/spinner-example.component';
import { TreeExampleComponent } from './tree-example/tree-example.component';
import { ColorScaleExampleComponent } from './color-scale-example/color-scale-example.component';


@NgModule({
  declarations: [
    ExamplesComponent,
    MenuAndButtonComponent,
    SnackBarExampleComponent,
    SpinnerExampleComponent,
    TreeExampleComponent,
    ColorScaleExampleComponent,
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule,
    NgColorScaleModule
  ]
})
export class ExamplesModule { }
