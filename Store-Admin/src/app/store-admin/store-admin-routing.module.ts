import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { DisplayAdminComponent } from './display-admin/display-admin.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
//   {path:"", component: LandingComponent,
// children: [
  {path: 'admin-dashboard', component: DisplayAdminComponent},
  {path: 'admin-dashboard/add-admin', component: AddAdminComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreAdminRoutingModule { }
