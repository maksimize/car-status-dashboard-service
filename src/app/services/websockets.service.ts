import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class WebsocketService {

  // Our socket connection
  private socket;

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io("127.0.0.1:8100");
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        console.log('=> ssssssss');
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });

    let observer = {
      next: (data: Object) => {
      },
    };

    return Rx.Subject.create(observer, observable);
  }

}
