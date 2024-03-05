import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  category: any;
  // fb: any;
  constructor(
    private categoryservice: CategoryService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const formData = this.categoryForm.value;
      this.categoryservice.addCategory(formData).subscribe((response) => {
        // this.category = response;
        console.log(this.category);
        
        alert('category added successfully');
      });
    }
  }

  // categoryForm!: FormGroup;
  //   category: any;

  //   constructor(private categoryService: CategoryService, private fb: FormBuilder) {}

  //   ngOnInit() {
  //     this.categoryForm = this.fb.group({
  //       'name': ['', Validators.required],
  //       'description': ['', Validators.required]
  //     });
  //   }

  //   onSubmit() {
  //     if (this.categoryForm.valid) {
  //       const formData = this.categoryForm.value;
  //       this.categoryService.addCategory(formData).subscribe(
  //         (response) => {
  //           this.category = response;
  //           console.log(response);

  //           alert("Category added successfully");
  //         }
  //       );
  //     }
  //   }
}
