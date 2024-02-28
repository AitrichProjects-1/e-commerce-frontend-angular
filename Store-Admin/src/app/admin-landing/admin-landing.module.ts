import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLandingRoutingModule } from './admin-landing-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminProductModule } from '../admin-product/admin-product.module';


@NgModule({
  declarations: [
    DashboardComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    AdminLandingRoutingModule,
    SharedModule,
    // AdminProductModule
  ]
})
export class AdminLandingModule { }
