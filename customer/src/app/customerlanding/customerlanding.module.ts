import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerlandingRoutingModule } from './customerlanding-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BanerComponent } from './components/baner/baner.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [
    HomepageComponent,
    BanerComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CustomerlandingRoutingModule,
    SharedModule,
    ProductsModule
    
  ],
  exports:[
    BanerComponent,
    CategoryComponent,
    HomepageComponent
  ]
})
export class CustomerlandingModule { }
