import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmationDialog } from './confirmationdialog.component';


@NgModule({
  imports: [MatDialogModule],
  declarations: [
    ConfirmationDialog
  ],
  entryComponents: [ConfirmationDialog],
 // providers: [ConfirmationDialog]
})
export class ConfirmationDialogModule { }
