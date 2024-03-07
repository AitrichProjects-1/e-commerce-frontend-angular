

import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { category } from '../models/category';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';


@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {
  categories: category[] = []; // Use the category model
  editcategory: any;


  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.fetchCategories(); // Call the function to fetch categories
  }



  fetchCategories() {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
     
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

deleteCategory(categoryId: string) {
  this.categoryService.deleteCategory(categoryId).subscribe(
      () => {
          
          this.categories = this.categories.filter(category => category.id !== categoryId);
        
      },
      (error) => {
          console.error('Error deleting category:', error);
      }
  );
}


}
