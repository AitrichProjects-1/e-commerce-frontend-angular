import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';


const routes: Routes = [
    {path: 'admin-category', component: DisplayCategoryComponent},
    {path: 'admin-category/add-category', component: AddCategoryComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCategoryRoutingModule {}
