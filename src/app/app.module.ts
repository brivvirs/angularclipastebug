import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {BaseService} from './base.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
