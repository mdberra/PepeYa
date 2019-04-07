import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './pepeya/header/header.component';
import { SimulatorComponent } from './pepeya/simulator/simulator.component';
import { ContactoComponent } from './pepeya/contacto/contacto.component';
import { FooterComponent } from './pepeya/footer/footer.component';
import { PepeyaComponent } from './pepeya/pepeya/pepeya.component';
import { Loan1Component } from './pepeya/pasos/loan1/loan1.component';
import { Loan2Component } from './pepeya/pasos/loan2/loan2.component';
import { Loan3Component } from './pepeya/pasos/loan3/loan3.component';
// Rutas
import { APP_ROUTING } from './app.routes';
// IO
import { HttpClientModule } from '@angular/common/http';
// Upload
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressBarModule } from "angular-progress-bar"
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimulatorComponent,
    ContactoComponent,
    FooterComponent,
    Loan1Component,
    Loan2Component,
    Loan3Component,
    PepeyaComponent
//    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
//    FlexLayoutModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    Ng2ImgMaxModule,
    Ng5SliderModule,
    NgxSpinnerModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
