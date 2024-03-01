import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: '',
        loadChildren: () =>
          import('../admin-product/admin-product.module').then(
            (m) => m.AdminProductModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../admin-category/admin-category.module').then(
            (m) => m.AdminCategoryModule
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