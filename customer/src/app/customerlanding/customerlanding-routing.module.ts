import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BanerComponent } from './components/baner/baner.component';
import { CategoryComponent } from './components/category/category.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from '../products/cart/cart.component';
import { WishlistComponent } from '../products/wishlist/wishlist.component';
import { OrderhomeComponent } from '../order/components/orderhome/orderhome.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent, },
    {path:'profile',component:ProfileComponent},
    {path:'cart',component:CartComponent},
  
    {path:'orders',component:OrderhomeComponent},
   
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerlandingRoutingModule { }
