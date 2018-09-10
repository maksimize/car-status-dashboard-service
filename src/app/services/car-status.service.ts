import { Injectable } from '@angular/core';
import { WebsocketService } from './websockets.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class CarStatusService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        console.log(response);
        return response;
      })
  }


}
