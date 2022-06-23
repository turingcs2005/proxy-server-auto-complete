import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { ToolListComponent } from './components/tool-list/tool-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tool-list', component: ToolListComponent },
  { path: 'help', component: HelpComponent },
  { path: 'examples', loadChildren: () => import('./modules/examples/examples.module').then(m => m.ExamplesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
