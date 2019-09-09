import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layout
import * as fromLayout from './layout';

// Feature containers
import * as fromDashboard from './features/dashboard/containers';

const ROUTES: Routes = [
  {
    path: '',
    component: fromLayout.CRMMainComponent,
    children: [
      {
        path: '',
        component: fromDashboard.DashboardComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CRMRoutingModule { }
