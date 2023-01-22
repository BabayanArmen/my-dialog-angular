import { ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';

export interface DialogSettings {
  showHeader?: boolean;
  showFooter?: boolean;
  clickOutesideClose?: boolean;
  width?: string;
  padding?: string
}

@Injectable({
  providedIn: 'root'
})
export class MyDialogService {
  private popups = [] as ComponentRef<any>[];
  private container?: ViewContainerRef;
  private dialogOutpuEvent: Subject<any> = new Subject<any>();

  constructor(private injector: Injector, private resolver: ComponentFactoryResolver) { }

  openDialog(entery: ViewContainerRef, component: Type<any>, settings: DialogSettings | null = null, data?: any) {
    if(settings === null) {
      settings = {
        showHeader: false,
        showFooter: false,
        clickOutesideClose: false,
        width: "80%",
        padding: '7px'
      }
    }

    if(settings !== null && settings.showHeader === undefined) settings.showHeader = false;
    if(settings !== null && settings.showFooter === undefined) settings.showFooter = false;
    if(settings !== null && settings.clickOutesideClose === undefined) settings.clickOutesideClose = false;
    if(settings !== null && settings.width === undefined) settings.width = "80%";

    this.injector = Injector.create({
      providers: [{ provide: 'dialogData', useValue: data }],
      parent: this.injector,
    });
    this.container = entery;
    const factory = this.resolver.resolveComponentFactory(DialogWrapperComponent);
    let dialog = this.container.createComponent(factory);
    dialog.instance.component = component;
    dialog.instance.showHeader = settings.showHeader;
    dialog.instance.showFooter = settings.showFooter;
    dialog.instance.clickOutesideClose = settings.clickOutesideClose;
    dialog.instance.dialogWidth = settings.width;
    dialog.instance.contentPadding = settings.padding;
    dialog.instance.dialogDataInjector = this.injector;
    dialog.instance.closeEvent = () => this.closeDialog();

    this.popups.push(dialog);

    return this.dialogOutpuEvent.asObservable();
  }

  closeDialog(data: any = null) {
    if(this.popups.length >= 0) {
      this.popups[this.popups.length-1].destroy();
      this.popups.pop();
      this.dialogOutpuEvent.next(data);
    }
  }
}
