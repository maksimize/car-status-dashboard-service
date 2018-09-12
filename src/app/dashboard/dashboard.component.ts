import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  owners: Object;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(val => {
      const id = val.id || "";
      let obs = this.http.get("http://127.0.0.1:8300/api/v1/cars/owner/" + id);
      obs.subscribe(
        data => {
          let owners;
          if (id != "") {
            owners = [data];
          } else {
            owners = data
          }
          this.owners = owners;
        }
      );
    });

  }


}
