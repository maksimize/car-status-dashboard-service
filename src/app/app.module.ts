import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {WebsocketService} from "./services/websockets.service";
import {CarStatusService} from "./services/car-status.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CarStatusService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
