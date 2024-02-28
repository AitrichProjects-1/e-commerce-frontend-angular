import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { DisplayAdminComponent } from './display-admin/display-admin.component';

const routes: Routes = [
  {path: 'add-admin', component: AddAdminComponent},
  {path: 'display-admin', component: DisplayAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreAdminRoutingModule { }
