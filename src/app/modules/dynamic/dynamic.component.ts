import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { AttributeModel } from '../../model/attribute.model';

@Component({
  selector: 'app-dynamic',
  template: 
  `
  <ng-template #text>
    <div>
      <label for="">{{ attribute.key }}</label>
      <input [type]="text">
    </div>
  </ng-template>

  <ng-template #number>
    <div>
      <label for="">{{ attribute.key }}</label>
      <input [type]="number">
    </div>
  </ng-template>

  <ng-template #section>
    <div>
      <h3>{{ attribute.key }}</h3>
    </div>
    <app-dynamic 
      *ngFor="let attribute of attribute.attributes" 
      [attribute]="attribute"
      [template]="attribute.type">
    </app-dynamic>
  </ng-template>

  <ng-container 
    *ngTemplateOutlet="template">
  </ng-container>
  `
})
export class DynamicComponent implements OnInit {

  @Input()
  attribute: AttributeModel

  @Input()
  template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}