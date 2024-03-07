import { ItemService } from './../../service/item.service';
import { Component } from '@angular/core';

import { Item } from '../../model/item';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent {
item: any;
items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getItem(); // Fetch items when the component initializes
  }

  getItem() {
    this.itemService.getItem().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
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
