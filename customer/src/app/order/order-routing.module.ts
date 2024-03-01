import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderhomeComponent } from './components/orderhome/orderhome.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { AddressComponent } from './components/address/address.component';

const routes: Routes = [
  {path:'producthome', component:OrderhomeComponent},
  {path:'orderplaced',component:OrderplacedComponent},
  {
    path:'myorders', component:OrderhomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
