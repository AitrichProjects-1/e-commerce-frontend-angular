import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandDisplayComponent } from './components/brand-display/brand-display.component';

const routes: Routes = [
  {path:'',component:BrandDisplayComponent},
  {path:'brand',component:BrandDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBrandRoutingModule { }
