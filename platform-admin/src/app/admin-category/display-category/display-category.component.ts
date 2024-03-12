

import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { category } from '../models/category';



@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {
//   categories: category[] = []; 

//   editcategory: any;


//   constructor(private categoryService: CategoryService) { }

//   ngOnInit() {
//     this.fetchCategories(); 
//   }



//   fetchCategories() {
//     this.categoryService.getCategories().subscribe(
//       (data) => {
//         this.categories = data;
     
//       },
//       (error) => {
//         console.error('Error fetching categories:', error);
//       }
//     );
//   }

// deleteCategory(categoryId: string) {
//   this.categoryService.deleteCategory(categoryId).subscribe(
//       () => {
          
//           this.categories = this.categories.filter(category => category.id !== categoryId);
        
//       },
//       (error) => {
//           console.error('Error deleting category:', error);
//       }
//   );
// }

categories: category[] = [];
  filteredCategories: category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        this.filteredCategories = [...this.categories];
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

  // handleSearch(searchTerm: string): void {
  //   this.categoryService.searchcategory(searchTerm).subscribe(
  //     (data) => {
  //       this.filteredCategories = data;
  //     },
  //     (error) => {
  //       console.error('Error searching categories:', error);
  //     }
  //   );
  // }
}
