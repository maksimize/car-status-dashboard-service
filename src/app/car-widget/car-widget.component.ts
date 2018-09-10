import {Component, OnInit, Input, Injectable} from '@angular/core';
import {WebsocketService} from "../services/websockets.service";
import {Observable, Subject} from 'rxjs/Rx';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-car-widget',
  templateUrl: './car-widget.component.html',
  styleUrls: ['./car-widget.component.css'],
})

@Injectable()
export class CarWidgetComponent implements OnInit {

  @Input() vid: string;
  @Input() status: string;
  WebSocketMessages: Subject<any>;
  subscription: Subscription;

  constructor(private wsService: WebsocketService) {
    this.subscription = Observable.interval(5000).take(1).subscribe();

  }

  changeState = function (state) {
    if (state == false) {
      this.status = "inactive";
      return;
    }
    this.status = "active";
    this.subscription = Observable.interval(5000).take(1).subscribe(() => this.changeState(false));
  };

  ngOnInit() {
    this.WebSocketMessages = <Subject<any>>this.wsService
      .connect()
      .map((response: any): any => {
        if (this.vid == response) {
          this.subscription.unsubscribe();
          this.changeState(true);
        }
      });

    this.WebSocketMessages.subscribe();
  }

}
