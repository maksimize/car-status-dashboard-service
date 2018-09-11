import {Component, OnInit, Input, Injectable} from '@angular/core';
import {WebsocketService} from "../services/websockets.service";
import {Observable, Subject} from 'rxjs/Rx';
import {Subscription} from "rxjs";
import {StatusToggleService} from "../services/status-toggle.service";

@Component({
  selector: 'app-car-widget',
  templateUrl: './car-widget.component.html',
  styleUrls: ['./car-widget.component.css'],
})

@Injectable()
export class CarWidgetComponent implements OnInit {

  @Input() vid: string;
  @Input() regNo: string;
  @Input() carState: string;
  WebSocketMessages: Subject<any>;
  subscription: Subscription;

  showIfActive: boolean = true;
  isVisible: boolean = true;

  constructor(private wsService: WebsocketService, private statusToggle: StatusToggleService) {
    this.subscription = Observable.interval(5000).take(1).subscribe();

  }

  changeState = function (state) {
    if (state == false) {
      this.carState = "inactive";
      return;
    }
    this.carState = "active";
    this.subscription = Observable.interval(5000).take(1).subscribe(() => this.changeState(false));
  };

  ngOnInit() {
    this.WebSocketMessages = <Subject<any>>this.wsService
      .connect()
      .map((response: any): any => {
        if (this.vid == response) {
          this.subscription.unsubscribe();
          this.changeState(true);
          this.toggleVisibility();
        }
      });
    this.WebSocketMessages.subscribe();

    this.statusToggle.toggleSubject.subscribe(state => {
        if (state == "all") {
          this.showIfActive = true;
        } else {
          this.showIfActive = false;
        }
        this.toggleVisibility();
      }
    );
  }

  toggleVisibility(){
    if (this.carState == "active" && this.showIfActive == false){
      this.isVisible = false;
      return
    }
    this.isVisible = true;
  }

}
