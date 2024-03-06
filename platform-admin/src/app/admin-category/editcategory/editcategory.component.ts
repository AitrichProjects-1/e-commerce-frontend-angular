// import { category } from './../models/category';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CategoryService } from '../service/category.service';

// @Component({
//   selector: 'app-editcategory',
//   templateUrl: './editcategory.component.html',
//   styleUrls: ['./editcategory.component.css']
// })
// export class EditcategoryComponent implements OnInit {
//   categoryForm: FormGroup;
//   categoryId: string;

//   constructor(
//     private categoryService: CategoryService,
//     private fb: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.categoryForm = this.fb.group({
//       name: [''],
//       description: ['']
//     });

//     // Get the categoryId from the route parameters
//     this.route.params.subscribe(params => {
//       this.categoryId = params['id'];
//       // Fetch category details based on categoryId
//       this.categoryService.getCategoryById(this.categoryId).subscribe(category => {
//         // Update the form with the fetched category details
//         this.categoryForm.patchValue({
//           name: category.name,
//           description: category.description
//         });
//       });
//     });
//   }

//   onSubmit() {
//     if (this.categoryForm.valid && this.categoryId) {
//       const updatedCategory = this.categoryForm.value;
//       this.categoryService.editCategory(this.categoryId, updatedCategory).subscribe(() => {
//         alert('Category updated successfully');
//         // Navigate back to the category list page
//         this.router.navigate(['/admin-category']);
//       }, error => {
//         console.error('Error editing category:', error);
//       });
//     }
//   }
// }
import { category } from '../models/category';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css'],
})
export class EditcategoryComponent implements OnInit {
  categoryForm: any;
  categoryId: string | null | undefined;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit():void {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.categoryForm = this.fb.group({
      name:[''],
      description:[''],
    });
    this.getCategories();
  }

  getCategories(): void {
    if (this.categoryId) {
      this.categoryService
      .getCategoryById(this.categoryId)
      .subscribe((category: any) => {
        this.categoryForm.patchValue(category);
      });
    }
  }

  onSubmit():void {
    if (this.categoryForm.valid && this.categoryId) {
      const updatedcategory = this.categoryForm.value;
      this.categoryService
        .editCategory(this.categoryId, updatedcategory)
        .subscribe(() => {
          alert('Category updated successfully');
          // Navigate back to the category list page
          this.router.navigate(['/admin-category']);
        });
    } else {
      console.log('error occured');
    }
  }
}
