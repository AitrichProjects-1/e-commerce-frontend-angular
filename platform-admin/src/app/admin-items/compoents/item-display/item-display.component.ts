import { ItemService } from './../../service/item.service';
import { Component } from '@angular/core';
import { category } from 'src/app/admin-category/models/category';
import { Item } from '../../model/item';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent {
// item: any;
// items: Item[] = [];

//   constructor(private itemService: ItemService) {}

//   ngOnInit() {
//     this.getItem(); // Fetch items when the component initializes
    
//   }

//   getItem() {
//     this.itemService.getItem().subscribe(
//       (data) => {
//         this.items = data;
//         console.log(this.items)
//       },
//       (error) => {
//         console.error('Error fetching items:', error);
//       }
//     );
//   }

//   deleteItem(itemId: string) {
//     this.itemService.deleteItem(itemId).subscribe(
//       () => {
//         this.items = this.items.filter(item => item.id !== itemId);
//       },
//       (error) => {
//         console.error('Error deleting item:', error);
//       }
//     );
//   }

items: Item[] = [];
categories: category[] = [];

constructor(private itemService: ItemService) {}

ngOnInit() {
  this.getItems(); // Fetch items when the component initializes
  this.getCategories(); // Fetch categories when the component initializes
}

getItems() {
  this.itemService.getItem().subscribe(
    (data) => {
      this.items = data;
      console.log(this.items);
    },
    (error) => {
      console.error('Error fetching items:', error);
    }
  );
}

getCategories() {
  this.itemService.getCategories().subscribe(
    (categories: category[]) => {
      this.categories = categories;
      console.log(this.categories);
    },
    (error) => {
      console.error('Error fetching categories:', error);
    }
  );
}

getCategoryName(categoryId: string): string {
  const category = this.categories.find(cat => cat.id === categoryId);
  return category ? category.name : '';
}

deleteItem(itemId: string) {
  this.itemService.deleteItem(itemId).subscribe(
    () => {
      this.items = this.items.filter(item => item.id !== itemId);
    },
    (error) => {
      console.error('Error deleting item:', error);
    }
  );
}
  
}
