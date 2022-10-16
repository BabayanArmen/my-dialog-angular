import { NgModule } from '@angular/core';
import { MyDialogComponent } from './my-dialog.component';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MyDialogComponent,
    DialogWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyDialogComponent
  ]
})
export class MyDialogModule { }
