import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiService } from './services/api.service';
import { OverlayService } from './services/overlay.service';
import { ResultService } from './services/result.service';

import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { OverlayComponent } from './components/overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      ApiService,
      OverlayService,
      ResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
