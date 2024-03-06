

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
// @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
// @ViewChild(MatSort)sort!:MatSort;
//   dataSource: any;

// ngAfterViewInit(){
//   this.dataSource.paginator=this.paginator;
//   this.dataSource.sort=this.sort;
// }

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

  // chunkCategories() {
  //   const chunkSize = 3;
  //   for (let i = 0; i < this.categories.length; i += chunkSize) {
  //     this.categoriesChunked.push(this.categories.slice(i, i + chunkSize));
  //   }
  // }


  



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


// categories: category[] = [];

//   @ViewChild('editCategory') editCategoryComponent: ModalEditComponent;

//   constructor(private categoryService: CategoryService) { }

//   ngOnInit(): void {
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

//   openEditModal(category: category) {
//     this.editCategoryComponent.category = category;
//     this.editCategoryComponent.openModal();
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





}
