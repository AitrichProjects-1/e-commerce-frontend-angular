
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../customerlanding/components/profile/profile.component';
import { CartComponent } from '../products/cart/cart.component';
import { WishlistComponent } from '../products/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:ProfileComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
