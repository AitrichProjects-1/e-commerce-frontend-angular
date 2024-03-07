import { Item } from './../../model/item';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ItemService } from '../../service/item.service';
import { category } from 'src/app/admin-category/models/category';
@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
  itemForm!: FormGroup;
  item: any;
  categories: category[] = [];

  constructor(private fb: FormBuilder, private itemService: ItemService) {}


  // ngOnInit() {
  //   this.itemForm = this.fb.group({
  //     name: new FormControl('', [Validators.required]),
  //     description: new FormControl('', [Validators.required]),
  //   });
  // }

  ngOnInit() {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
    });

    // Fetch categories when component initializes
    this.fetchCategories();
  }

  fetchCategories() {
    this.itemService.getCategories().subscribe(
      (categories: category[]) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  onSubmit() {
    if (this.itemForm.valid) {
      const formData = this.itemForm.value;
      this.itemService.addItem(formData).subscribe((response) => {
        // this.category = response;
        console.log(this.item);
        
        alert('items added successfully');
      });
    }
  }



}
