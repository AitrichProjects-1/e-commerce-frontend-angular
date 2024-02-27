import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLandingRoutingModule } from './admin-landing-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    AdminLandingRoutingModule,
    SharedModule
  ]
})
export class AdminLandingModule { }
