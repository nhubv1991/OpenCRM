import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'crm',
    loadChildren: () => import('./modules/crm/crm.module').then(m => m.CRMModule)
  },
  {
    path: '**',
    redirectTo: '/crm'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
