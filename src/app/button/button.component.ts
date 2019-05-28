import { Component, OnInit } from '@angular/core';
import { DynamicItem } from '../modules/dynamic/dynamic-item';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends DynamicItem implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
  }

}
