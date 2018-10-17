import { Component, OnInit } from '@angular/core';
import { DynamicItem } from '../modules/dynamic/dynamic-item';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent extends DynamicItem implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
