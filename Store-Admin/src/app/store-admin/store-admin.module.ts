import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreAdminRoutingModule } from './store-admin-routing.module';
import { DisplayAdminComponent } from './display-admin/display-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    DisplayAdminComponent,
    AddAdminComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    StoreAdminRoutingModule
  ]
})
export class StoreAdminModule { }
