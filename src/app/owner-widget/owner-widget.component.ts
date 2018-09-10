import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-owner-widget',
  templateUrl: './owner-widget.component.html',
  styleUrls: ['./owner-widget.component.css']
})
export class OwnerWidgetComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
