import { Component, OnInit } from '@angular/core';
import { DynamicItem } from '../modules/dynamic/dynamic-item';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent extends DynamicItem implements OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
  }

}
