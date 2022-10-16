import { Component, ViewContainerRef } from '@angular/core';
import { MyDialogService } from 'my-dialog';
import { take } from 'rxjs';
import { PopupComponent } from './pages/popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libraries';

  constructor(private ref: ViewContainerRef, private myDialog: MyDialogService) {}

  openDialog() {
    this.myDialog.openDialog(
      this.ref, PopupComponent,
      {showHeader: true, showFooter: true, clickOutesideClose: false},
      {name: 'John Blacksmith'}
    )
    .pipe(take(1))
    .subscribe(res => {
      console.log(res)
    })
  }
}
