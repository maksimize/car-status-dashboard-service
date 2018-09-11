import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatusToggleService {

  toggleSubject: Subject<any>;

  constructor() {
    this.toggleSubject = new Subject();
  }

  toggle(state: any) {
    this.toggleSubject.next(state);
  }
}
