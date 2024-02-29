import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { ViewcategoryproductComponent } from './viewcategoryproduct/viewcategoryproduct.component';


@NgModule({
  declarations: [
    ViewproductComponent,
    AdvertisementComponent,
    ProductdetailComponent,
    CartComponent,
    ViewcategoryproductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
   AdvertisementComponent,
   ViewproductComponent,
   ProductdetailComponent,
   ViewcategoryproductComponent,
  
    
   ],
})
export class ProductsModule { }
