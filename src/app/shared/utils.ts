import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, Injectable, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../components/dialog/dialog.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { DialogButtonOptions } from '../models/dialog.interface';

@Injectable({ providedIn: 'root' })
export class UtilsClass {

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  openSnackBar(message: string, type: string) {
    this._snackBar.open('', message, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: type == 'success' ? ['success-snackbar', 'snackbar'] : ['error-snackbar', 'snackbar']
    });
  }

  openDialog(title: string, message?: string, size?: string, btnOptions?: DialogButtonOptions[]): void {
    let width = size == 'lg' ? '75%' : size == 'md' ? '50%' : size == 'sm' ? '25%' : '100%'
    const dialogRef = this.dialog.open(DialogComponent, {
      width,
      data: { title, message, btnOptions }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
}
