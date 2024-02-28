import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AdminLandingModule } from './admin-landing/admin-landing.module';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [AppComponent,NotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, AdminLandingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
