import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductRoutingModule } from './admin-product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { LandingComponent } from './landing/landing.component';
import { DisplayProductComponent } from './display-product/display-product.component';


@NgModule({
  declarations: [
    AddProductComponent,
    LandingComponent,
    DisplayProductComponent
  ],
  imports: [
    CommonModule,
    AdminProductRoutingModule,
  ]
})
export class AdminProductModule { }
