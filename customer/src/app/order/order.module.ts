import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';
import { AddressComponent } from './components/address/address.component';
import { OrderhomeComponent } from './components/orderhome/orderhome.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { ProductsModule } from "../products/products.module";


@NgModule({
    declarations: [
        OrdersummaryComponent,
        AddressComponent,
        OrderhomeComponent,
        OrderplacedComponent
    ],
    exports: [
        AddressComponent,
        OrdersummaryComponent,
        OrderplacedComponent,
    ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        ProductsModule
    ]
})
export class OrderModule { }