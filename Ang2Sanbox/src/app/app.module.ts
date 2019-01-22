import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoggingService } from './logging.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialog } from './ConfirmationDialog/confirmationdialog.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent
   
  ],
  entryComponents: [ConfirmationDialog],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
              LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
