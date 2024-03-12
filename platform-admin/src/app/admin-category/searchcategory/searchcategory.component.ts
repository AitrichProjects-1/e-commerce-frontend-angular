import { CategoryService } from './../service/category.service';
import { Component,EventEmitter,Output } from '@angular/core';
import { category } from '../models/category';

import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-searchcategory',
  templateUrl: './searchcategory.component.html',
  styleUrls: ['./searchcategory.component.css']
})
export class SearchcategoryComponent {

  // searchForm: FormGroup;

  // @Output() searchEvent = new EventEmitter<string>();

  // constructor(private fb: FormBuilder, private categoryService:CategoryService) {
  //     this.searchForm = this.fb.group({
  //         searchTerm: ['']
  //     });
  // }

  // search(): void {
  //     const searchTerm = this.searchForm.get('searchTerm')?.value;
  //     this.searchEvent.emit(searchTerm);
  // }

  searchForm: FormGroup;

  @Output() searchEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['']
    });
  }

  search(): void {
    const searchTerm = this.searchForm.get('searchTerm')?.value;
    this.searchEvent.emit(searchTerm);
  }

}
