import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
  {path:'productdetail',component: ProductdetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
