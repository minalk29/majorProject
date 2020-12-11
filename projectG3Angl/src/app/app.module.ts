import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { NavFavComponent } from './nav-fav/nav-fav.component';
import { FormsModule } from '@angular/forms';
import { StatusComponent } from './status/status.component';
import { McqComponent } from './mcq/mcq.component';
import { AngularMaterialModule } from './angular-material.module';
import { AddtoFavComponent } from './addto-fav/addto-fav.component';

// For MDB Angular Free

@NgModule({
  declarations: [
    AppComponent,
    NavFavComponent,
    StatusComponent,
    McqComponent,AddtoFavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
