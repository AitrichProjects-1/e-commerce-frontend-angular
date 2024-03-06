// import { category } from './../models/category';
// import { Component ,Input, OnInit} from '@angular/core'
// import { FormGroup,Validators ,FormControl, FormBuilder} from '@angular/forms';
// import { CategoryService } from '../service/category.service';

// @Component({
//   selector: 'app-modal-edit',
//   templateUrl: './modal-edit.component.html',
//   styleUrls: ['./modal-edit.component.css']
// })
// export class ModalEditComponent implements OnInit{
// onSubmit() {
// throw new Error('Method not implemented.');
// }
//   categoryForm!: FormGroup;
//   category: any;
//   constructor(
//     private categoryservice: CategoryService,
//     private fb: FormBuilder
//   ) {}

//   ngOnInit(): {
//       this.categoryForm = this.fb.group({
//         name: new FormControl('', [Validators.required]),
//         description: new FormControl('', [Validators.required]),
//       });
    
//   }

  
//   onsubmit() {
//     if (this.categoryForm.valid) {
//       const formData = this.categoryForm.value;
//       this.categoryservice.editCategory(id).subscribe((response) => {
       
//         console.log(this.category);
        
//         alert('category added successfully');
//       });
//     }
//   }

// }

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { category } from '../models/category';


@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {
  @Input() category: category;
  editForm: FormGroup;

  constructor(private fb: FormBuilder, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: [this.category.name, Validators.required],
      description: [this.category.description, Validators.required]
    });
  }

  // openModal() {
  //   $('#editCategoryModal').modal('show');
  // }

  // closeModal() {
  //   $('#editCategoryModal').modal('hide');
  // }

  openModal() {
    const modal = document.getElementById('editCategoryModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }
  
  closeModal() {
    const modal = document.getElementById('editCategoryModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
  



 
  }



  

