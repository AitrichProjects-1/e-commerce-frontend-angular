import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { AdminCategoryRoutingModule } from './admin-category-routing.module';



@NgModule({
  declarations: [AddCategoryComponent, DisplayCategoryComponent],
  imports: [CommonModule, AdminCategoryRoutingModule],
})
export class AdminCategoryModule {}
