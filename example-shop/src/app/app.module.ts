import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryLightboxComponent } from './gallery-lightbox/gallery-lightbox.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryLightboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
