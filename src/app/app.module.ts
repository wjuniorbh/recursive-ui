import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponent } from './modules/dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
