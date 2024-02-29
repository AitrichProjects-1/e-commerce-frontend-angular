import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { ViewcategoryproductComponent } from './viewcategoryproduct/viewcategoryproduct.component';

const routes: Routes = [
  {path:'productdetail',component: ProductdetailComponent},
  {path:'cart',component:CartComponent},
  {path:'',component:ViewcategoryproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
