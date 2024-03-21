import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { ListeComponentComponent } from './liste-component/liste-component.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponentComponent,
    ListeComponentComponent,
    DetailComponentComponent,
    ItemComponentComponent,
    FirstComponent,
    HomeAccountComponent,
    AddAccountComponent,
    ItemAccountComponent,
    DirectComponent,
    MsWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
