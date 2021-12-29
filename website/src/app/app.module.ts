import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import { TrailerComponent } from './trailer/trailer.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import { ImprintComponent } from './imprint/imprint.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent,
    CardComponent,
    TrailerComponent,
    FooterComponent,
    FormComponent,
    ImprintComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
