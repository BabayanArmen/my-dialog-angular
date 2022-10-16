import { Component, Injector, OnInit, Type } from '@angular/core';
import { MyDialogService } from '../my-dialog.service';

@Component({
  selector: 'lib-dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.css']
})
export class DialogWrapperComponent implements OnInit {
  public component?: Type<any>;
  public showHeader: boolean = true;
  public showFooter: boolean = true;
  public clickOutesideClose: boolean = false;
  public dialogDataInjector?: Injector;

  constructor(public dialogService: MyDialogService) { }

  ngOnInit(): void {   
  }

  closeDialog() {
    this.dialogService.closeDialog()
  }

  outsideClickCloseEvent(event: any) {
    if(event.target.id === 'dialog-wrapper' && this.clickOutesideClose) {
      this.closeDialog()
    }
  }}
