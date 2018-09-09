import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {WebsocketService} from "./services/websockets.service";
import {CarStatusService} from "./services/car-status.service";
import {CarWedgitComponent} from "./car-wedgit/car-wedgit.component";

@NgModule({
  declarations: [
    AppComponent,
    CarWedgitComponent
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
