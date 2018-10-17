import { Component, OnInit } from '@angular/core';
import { DynamicItem } from '../modules/dynamic/dynamic-item';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends DynamicItem implements OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
  }

}
