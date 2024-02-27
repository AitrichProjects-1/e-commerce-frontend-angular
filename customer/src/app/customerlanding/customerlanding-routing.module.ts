import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BanerComponent } from './components/baner/baner.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent,
   
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerlandingRoutingModule { }
