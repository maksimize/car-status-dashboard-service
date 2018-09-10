import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {CarStatusService} from "./services/car-status.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'Car Dashboard';
  constructor(private http: HttpClient){
    console.log("=====App starts======")
  }

  ngOnInit(){

  }
}

