import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ViewcategoryproductComponent } from './viewcategoryproduct/viewcategoryproduct.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {path:'productdetail',component: ProductdetailComponent},
  {path:'cart',component:CartComponent},
  {path:'',component:ViewcategoryproductComponent},
  {path:'wishlist',component:WishlistComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
