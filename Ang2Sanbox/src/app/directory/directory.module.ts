import { NgModule } from '@angular/core';
import { DirectoryComponent } from './directory.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogModule } from '../ConfirmationDialog/ConfirmationDialog.module';
import { ConfirmationDialog } from '../ConfirmationDialog/confirmationdialog.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    MatDialogModule,
    ConfirmationDialogModule
  ],
  declarations: [
    DirectoryComponent,
    FilterPipe,
  ],
  entryComponents: [ConfirmationDialog]

})
export class DirectoryModule { }
