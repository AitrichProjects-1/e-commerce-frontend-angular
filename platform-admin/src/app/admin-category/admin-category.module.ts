import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { AdminCategoryRoutingModule } from './admin-category-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalEditComponent } from './modal-edit/modal-edit.component';


@NgModule({
  declarations: [AddCategoryComponent, DisplayCategoryComponent, ModalEditComponent],
  imports: [CommonModule, AdminCategoryRoutingModule,ReactiveFormsModule],
  
})
export class AdminCategoryModule {}
