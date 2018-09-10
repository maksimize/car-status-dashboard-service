import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-car-widget',
  templateUrl: './car-widget.component.html',
  styleUrls: ['./car-widget.component.css'],
})


export class CarWidgetComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  @Input() vid: string;


}
