import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {CarStatusService} from "./services/car-status.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car Dashboard';
  constructor(private http: HttpClient, private carStatus: CarStatusService){
    console.log("=====App starts======")
  }

  ngOnInit(){
    this.carStatus.messages.subscribe(msg => {
      // console.log("chat.messages.subscribe" + msg);
    });
    // console.log("=> sending request");
    // let obs = this.http.get("http://127.0.0.1:8080/api/v1/cars/owner/");
    // obs.subscribe(()=> console.log("=> got the response"));
  }
}

