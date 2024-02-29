import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';
import { OrderhomeComponent } from './components/orderhome/orderhome.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';

const routes: Routes = [
  {path:'address', component:OrderhomeComponent},
  {path:'orderplaced',component:OrderplacedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
