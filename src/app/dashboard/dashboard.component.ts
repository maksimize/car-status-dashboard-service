import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  owners: Object;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    let obs = this.http.get("http://127.0.0.1:8080/api/v1/cars/owner/");
    obs.subscribe(
      data => {
        console.log("=> got the data");
        this.owners = data;
      },
      () => console.log("=> got the response")
    );
  }

}
