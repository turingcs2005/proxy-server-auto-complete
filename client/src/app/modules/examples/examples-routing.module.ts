import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples.component';
import { MenuAndButtonComponent } from './menu-and-button/menu-and-button.component';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
  { path: 'menu-and-button', component: MenuAndButtonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
