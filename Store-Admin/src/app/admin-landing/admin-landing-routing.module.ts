import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'admin-product',
        loadChildren: () =>
          import('../admin-product/admin-product.module').then(
            (m) => m.AdminProductModule
          ),
      },
      { path: '', component: DashboardComponent },
      {
        path: 'store-admin',
        loadChildren: () =>
          import('../store-admin/store-admin.module').then(
            (m) => m.StoreAdminModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLandingRoutingModule { }
