import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { AdminCategoryRoutingModule } from './admin-category-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { SearchcategoryComponent } from './searchcategory/searchcategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';



@NgModule({
  declarations: [AddCategoryComponent, DisplayCategoryComponent, ModalEditComponent, SearchcategoryComponent, EditcategoryComponent],
  imports: [CommonModule, AdminCategoryRoutingModule,ReactiveFormsModule],
  
})
export class AdminCategoryModule {}
