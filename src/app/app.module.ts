import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
@NgModule({
  declarations: [AppComponent, ImageUploadComponent, CsvUploadComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
