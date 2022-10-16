import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyDialogModule } from 'my-dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './pages/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
