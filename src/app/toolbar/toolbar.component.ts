import {Component, OnInit} from '@angular/core';
import {StatusToggleService} from "../services/status-toggle.service";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  owners: Object;
  _toggleState: string = 'all';

  constructor(private statusToggle: StatusToggleService, private http: HttpClient) {
  }

  ngOnInit() {
    let obs = this.http.get(environment.CarDetailsAPIEndpoint + "/api/v1/cars/owner/");
    obs.subscribe(
      data => {
        this.owners = data;
      }
    );
  }

  toggle() {
    if (this._toggleState == 'all') {
      this._toggleState = 'inactive_only';
    } else {
      this._toggleState = 'all';
    }
    this.statusToggle.toggle(this._toggleState);
  }

}
