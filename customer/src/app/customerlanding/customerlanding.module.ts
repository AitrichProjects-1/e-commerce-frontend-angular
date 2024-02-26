import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerlandingRoutingModule } from './customerlanding-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    CustomerlandingRoutingModule,
    SharedModule,
  ]
})
export class CustomerlandingModule { }
