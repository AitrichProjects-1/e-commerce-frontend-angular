import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLandingRoutingModule } from './admin-landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminLandingRoutingModule,
    SharedModule
  ]
})
export class AdminLandingModule { }
