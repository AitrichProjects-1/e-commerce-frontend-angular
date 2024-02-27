import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


@NgModule({
  declarations: [
    ViewproductComponent,
    AdvertisementComponent,
    ProductdetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
   AdvertisementComponent,
   ViewproductComponent,
   ProductdetailComponent,
  
    
   ],
})
export class ProductsModule { }
