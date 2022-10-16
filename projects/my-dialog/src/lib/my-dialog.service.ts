import { Injectable, Injector, Type, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';

interface DialogSettings {
  showHeader: boolean,
  showFooter: boolean,
  clickOutesideClose: boolean
}

@Injectable({
  providedIn: 'root'
})
export class MyDialogService {
  private container?: ViewContainerRef;
  private dialogOutpuEvent: Subject<any> = new Subject<any>();

  constructor(private injector: Injector) { }

  openDialog(entery: ViewContainerRef, component: Type<any>, settings: DialogSettings, data?: any) {
    this.injector = Injector.create({
      providers: [{ provide: 'dialogData', useValue: data }],
      parent: this.injector,
    });
    this.container = entery;
    this.container.clear();
    let dialog = this.container.createComponent(DialogWrapperComponent);
    dialog.instance.component = component;
    dialog.instance.showHeader = settings.showHeader;
    dialog.instance.showFooter = settings.showFooter;
    dialog.instance.clickOutesideClose = settings.clickOutesideClose;
    dialog.instance.dialogDataInjector = this.injector;
    return this.dialogOutpuEvent.asObservable();
  }

  closeDialog(data: any = null) {
    if(this.container !== undefined) this.container.clear();
    this.dialogOutpuEvent.next(data);
  }
}
