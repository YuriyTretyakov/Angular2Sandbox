import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoggingService } from './logging.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
   
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
              LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
