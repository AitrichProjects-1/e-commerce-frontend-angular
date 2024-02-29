import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: '',loadChildren: () => import('./admin-landing/admin-landing.module').then((m) => m.AdminLandingModule)},
  { path: '' , loadChildren: ()=> import ('./auth/auth.module').then((m) => m.AuthModule)},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
