import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(
      (m) => m.PagesModule,
    ),
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(
      (m) => m.UserModule
    ),
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(
      (m) => m.AdminModule
    ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
