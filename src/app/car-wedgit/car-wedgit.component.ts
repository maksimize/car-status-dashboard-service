import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-car-wedgit',
  templateUrl: './car-wedgit.component.html',
  styleUrls: ['./car-wedgit.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CarWedgitComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  @Input() vid: string;


}
