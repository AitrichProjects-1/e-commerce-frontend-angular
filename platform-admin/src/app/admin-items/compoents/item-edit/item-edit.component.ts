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
  editForm: any;
 itemId: string | null | undefined;

  constructor(
    private ItemService: ItemService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit():void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      name:[''],
      category:[''],
      description:[''],
    });
    this.getitem();
  }
  
  getitem(): void {
    if (this.itemId) {
      this.ItemService
      .getitemById(this.itemId)
      .subscribe((item: any) => {
        this.editForm.patchValue(item);
      });
    }
  }

  onSubmit():void {
    if (this.editForm.valid && this.itemId) {
      const updateditem = this.editForm.value;
      this.ItemService
        .editItem(this.itemId, updateditem )
        .subscribe(() => {
          alert('item updated successfully');
          // Navigate back to the category list page
          this.router.navigate(['/view']);
        });
    } else {
      console.log('error occured');
    }
  }

}
