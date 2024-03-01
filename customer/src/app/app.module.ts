import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CustomerlandingModule } from './customerlanding/customerlanding.module';
import { SharedModule } from "./shared/shared.module";
import { OrderModule } from './order/order.module';

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CustomerlandingModule,
        SharedModule,
        OrderModule,
    ]
})
export class AppModule { }
