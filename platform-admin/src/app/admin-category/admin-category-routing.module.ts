import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { SearchcategoryComponent } from './searchcategory/searchcategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';


const routes: Routes = [
    {path: 'admin-category', component: DisplayCategoryComponent},
    {path: 'admin-category/add-category', component: AddCategoryComponent},
    {path:'',component:DisplayCategoryComponent},
    {path:'edit/:id',component:EditcategoryComponent},
    {path:'search',component:SearchcategoryComponent},
    // {path:'**',component:NotfoundComponent},
   
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCategoryRoutingModule {}
