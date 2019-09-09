import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromLayout from './layout';
import * as fromContainers from './containers';

const ROUTES: Routes = [
  {
    path: '',
    component: fromLayout.AuthMainComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: fromContainers.LoginComponent,
        data: {
          title: 'Login'
        }
      },
      {
        path: 'register',
        component: fromContainers.RegisterComponent,
        data: {
          title: 'Register'
        }
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
