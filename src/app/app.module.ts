import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperationsPanelComponent } from './operations-panel/operations-panel.component';
import { OutputPanelComponent } from './output-panel/output-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationsPanelComponent,
    OutputPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
