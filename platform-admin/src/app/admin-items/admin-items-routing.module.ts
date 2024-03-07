import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDisplayComponent } from './compoents/item-display/item-display.component';
import { ItemAddComponent } from './compoents/item-add/item-add.component';
import { ItemEditComponent } from './compoents/item-edit/item-edit.component';

const routes: Routes = [
  {path: 'view', component: ItemDisplayComponent},
  {path: '', component: ItemDisplayComponent},
    {path: 'add', component: ItemAddComponent},
    {path:'',component:ItemDisplayComponent},
    {path:'edititem/:id',component:ItemEditComponent},
   
    // {path:'**',component:NotfoundComponent},
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminItemsRoutingModule { }
