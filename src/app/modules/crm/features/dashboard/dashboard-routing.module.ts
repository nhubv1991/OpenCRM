import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.DashboardComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
