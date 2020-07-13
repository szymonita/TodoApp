import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  message: string
}

@Component({
  selector: 'error-message',
  templateUrl: 'error-message.html',
})
export class ErrorMessageDialog {

  constructor(
    public dialogRef: MatDialogRef<ErrorMessageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

}
