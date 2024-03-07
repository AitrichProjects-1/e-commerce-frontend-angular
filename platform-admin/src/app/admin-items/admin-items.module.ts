import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminItemsRoutingModule } from './admin-items-routing.module';
import { ItemAddComponent } from './compoents/item-add/item-add.component';
import { ItemDisplayComponent } from './compoents/item-display/item-display.component';
import { ItemEditComponent } from './compoents/item-edit/item-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemAddComponent,
    ItemDisplayComponent,
    ItemEditComponent
  ],
  imports: [
    CommonModule,
    AdminItemsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminItemsModule { }
