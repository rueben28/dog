import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomImageComponent } from './random-image/random-image.component';

import { AppService } from './app.service';
import { BreedImageComponent } from './breed-image/breed-image.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomImageComponent,
    BreedImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
