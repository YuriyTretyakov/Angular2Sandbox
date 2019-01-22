import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  title: string;
  text: string;
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirmationdialog.component.html',
})
export class ConfirmationDialog {


  constructor(public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(ninjaName: string): void {
    this.dialogRef.close(ninjaName);
  }


}
