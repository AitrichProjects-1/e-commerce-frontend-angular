import { Item } from './../../model/item';
import { ItemService } from './../../service/item.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { category } from 'src/app/admin-category/models/category';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent {
//   editForm: any;
//  itemId: string | null | undefined;

//   constructor(
//     private ItemService: ItemService,
//     private fb: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit():void {
//     this.itemId = this.route.snapshot.paramMap.get('id');
//     this.editForm = this.fb.group({
//       name:[''],
//       category:[''],
//       description:[''],
//     });
//     this.getitem();
//   }
  
//   getitem(): void {
//     if (this.itemId) {
//       this.ItemService
//       .getitemById(this.itemId)
//       .subscribe((item: any) => {
//         this.editForm.patchValue(item);
//       });
//     }
//   }

//   onSubmit():void {
//     if (this.editForm.valid && this.itemId) {
//       const updateditem = this.editForm.value;
//       this.ItemService
//         .editItem(this.itemId, updateditem )
//         .subscribe(() => {
//           alert('item updated successfully');
//           // Navigate back to the category list page
//           this.router.navigate(['/view']);
//         });
//     } else {
//       console.log('error occured');
//     }
//   }

editForm: any;
  itemId: string | null | undefined;
  categories: category[] = []; // Initialize categories array

  constructor(
    private itemService: ItemService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      name: [''],
      categoryId: [''], // Change to categoryId
      description: [''],
    });
    this.getItem();
    this.fetchCategories(); // Fetch categories when component initializes
  }
  
  getItem(): void {
    if (this.itemId) {
      this.itemService
      .getitemById(this.itemId) // Update to getItemById
      .subscribe((item: any) => {
        this.editForm.patchValue(item);
      });
    }
  }

  fetchCategories(): void {
    this.itemService.getCategories().subscribe(
      (categories: category[]) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.editForm.valid && this.itemId) {
      const updatedItem = this.editForm.value;
      this.itemService
        .editItem(this.itemId, updatedItem)
        .subscribe(() => {
          alert('Item updated successfully');
          // Navigate back to the item list page
          this.router.navigate(['/view']);
        });
    } else {
      console.log('Error occurred');
    }
  }

}
