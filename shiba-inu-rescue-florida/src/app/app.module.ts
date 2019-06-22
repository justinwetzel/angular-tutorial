import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShibaComponent } from './shiba/shiba.component';
import { ShibaDetailComponent} from './shiba/shiba-list/shiba-detail/shiba-detail.component';
import { ShibaListComponent } from './shiba/shiba-list/shiba-list.component';
import { ShibaListEditComponent } from './shiba/shiba-list/shiba-list-edit/shiba-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { AdoptableShibaListComponent } from './adoptable-shiba-list/adoptable-shiba-list.component';
import { AdoptableShibaEditComponent } from './adoptable-shiba-list/adoptable-shiba-edit/adoptable-shiba-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShibaComponent,
    ShibaDetailComponent,
    ShibaListComponent,
    ShibaListEditComponent,
    HeaderComponent,
    AdoptableShibaListComponent,
    AdoptableShibaEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
