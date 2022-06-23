import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorScaleExampleComponent } from './color-scale-example/color-scale-example.component';
import { ExamplesComponent } from './examples.component';
import { MenuAndButtonComponent } from './menu-and-button/menu-and-button.component';
import { SnackBarExampleComponent } from './snack-bar-example/snack-bar-example.component';
import { SpinnerExampleComponent } from './spinner-example/spinner-example.component';
import { TreeExampleComponent } from './tree-example/tree-example.component';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
  { path: 'menu-and-button', component: MenuAndButtonComponent },
  { path: 'snack-bar-example', component: SnackBarExampleComponent },
  { path: 'spinner-example', component: SpinnerExampleComponent },
  { path: 'tree-example', component: TreeExampleComponent },
  { path: 'color-scale-example', component: ColorScaleExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
