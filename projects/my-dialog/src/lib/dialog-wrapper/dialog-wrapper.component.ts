import { Component, Injector, OnInit, Type, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.css']
})
export class DialogWrapperComponent implements OnInit {
  public component?: Type<any>;
  public showHeader?: boolean;
  public showFooter?: boolean;
  public clickOutesideClose?: boolean;
  public dialogWidth?: string;
  public dialogDataInjector!: Injector;
  public contentPadding?: string;

  public closeEvent!: Function;

  constructor() { }

  ngOnInit(): void {
  }

  outsideClickCloseEvent(event: any) {
    if(event.target.id === 'dialog-wrapper' && this.clickOutesideClose) {
      this.closeEvent();
    }
  }
}
