import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatusToggleService {

  toggleSubject: Subject<any>;
  _state: string = "all";

  constructor() {
    this.toggleSubject = new Subject();
  }

  toggle(state: any) {
    this._state = state;
    this.toggleSubject.next(state);
  }

  getToggleState() {
    return this._state;
  }
}
