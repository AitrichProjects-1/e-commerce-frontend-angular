import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsModule } from '../products/products.module';
import { OrderModule } from '../order/order.module';
import { ProductsRoutingModule } from '../products/products-routing.module';
import { OrderRoutingModule } from '../order/order-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ProductsRoutingModule,
   OrderRoutingModule,
  ],
  exports: [
   HeaderComponent,
   FooterComponent,
   SidebarComponent
   
  ],
})
export class SharedModule { }
