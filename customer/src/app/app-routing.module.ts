import { HomepageComponent } from './customerlanding/components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlandingModule } from './customerlanding/customerlanding.module';

const routes: Routes = [
  
    {
      path: '',loadChildren:()=>import('./customerlanding/customerlanding.module').then(m=>m.CustomerlandingModule)
    },
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }