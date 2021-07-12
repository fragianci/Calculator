import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperationsPanelComponent } from './operations-panel/operations-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationsPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
