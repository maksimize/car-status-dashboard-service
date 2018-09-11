import { Component, OnInit } from '@angular/core';
import {StatusToggleService} from "../services/status-toggle.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  _toggleState: string = 'all';

  constructor(private statusToggle: StatusToggleService) { }

  ngOnInit() {
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
