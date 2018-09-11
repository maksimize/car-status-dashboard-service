import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StatusToggleService} from "../services/status-toggle.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  owners: Object;
  _toggleState: string = 'all';

  constructor(private http: HttpClient, private statusToggle: StatusToggleService) {

  }

  ngOnInit() {
    let obs = this.http.get("http://127.0.0.1:8300/api/v1/cars/owner/");
    obs.subscribe(
      data => {
        console.log("=> got the data");
        this.owners = data;
      },
      () => console.log("=> got the response")
    );
  }

  toggle(){
    if (this._toggleState == 'all') {
      this._toggleState = 'inactive_only';
    } else {
      this._toggleState = 'all';
    }
    this.statusToggle.toggle(this._toggleState);
  }

}
