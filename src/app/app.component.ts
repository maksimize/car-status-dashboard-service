import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spa';
  constructor(private http: HttpClient){
    console.log("=> starting")
  }

  ngOnInit(){
    console.log("=> sending request");
    let obs = this.http.get("http://127.0.0.1:8080/api/v1/cars/owner/");
    obs.subscribe(()=> console.log("=> got the response"));
  }
}

