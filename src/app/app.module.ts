import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {WebsocketService} from "./services/websockets.service";
import {CarStatusService} from "./services/car-status.service";
import {CarWidgetComponent} from "./car-widget/car-widget.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    CarWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    CarStatusService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
