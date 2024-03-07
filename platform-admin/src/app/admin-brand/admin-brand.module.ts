import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBrandRoutingModule } from './admin-brand-routing.module';
import { BrandDisplayComponent } from './components/brand-display/brand-display.component';


@NgModule({
  declarations: [
    BrandDisplayComponent
  ],
  imports: [
    CommonModule,
    AdminBrandRoutingModule
  ]
})
export class AdminBrandModule { }
