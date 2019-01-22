import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

import { ConfirmationDialog } from './confirmationdialog';


@NgModule({
  imports: [MatDialogModule],
  declarations: [
    ConfirmationDialog
  ],
})
export class ConfirmationDialogModule { }
