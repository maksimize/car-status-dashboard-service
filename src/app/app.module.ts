import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {WebsocketService} from "./services/websockets.service";
import {CarWidgetComponent} from "./car-widget/car-widget.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule} from "@angular/material";
import {OwnerWidgetComponent} from './owner-widget/owner-widget.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StatusToggleService} from "./services/status-toggle.service";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CarWidgetComponent,
    OwnerWidgetComponent,
    DashboardComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [
    WebsocketService,
    StatusToggleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
