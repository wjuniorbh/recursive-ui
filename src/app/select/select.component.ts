import { Component, OnInit } from '@angular/core';
import { DynamicItem } from '../modules/dynamic/dynamic-item';
import { AttributeModel } from '../modules/dynamic/model/attribute.model';

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

  onChangedSelect(value) { 
  }

  getOptionsSelect(): AttributeModel[] {
    return this.attribute.attributes
  }
}
