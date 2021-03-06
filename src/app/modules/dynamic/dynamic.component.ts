import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, Inject, Type } from '@angular/core';
import { DynamicItemDirective } from './dynamic-item.directive';
import { AttributeModel } from './model/attribute.model';
import { DynamicItemConfigService } from './service/dynamic-item-config.service';
import { DynamicItemConfig } from './model/dynamic-item-config';
import { DynamicItem } from './dynamic-item';
import { DynamicItemMapping } from './model/dynamic-item-mapping';

@Component({
  selector: 'app-dynamic',
  template: `<ng-template app-dynamic-item></ng-template>`
})
export class DynamicComponent implements OnInit {

  @Input()
  attribute: AttributeModel

  @ViewChild(DynamicItemDirective) 
  itemHost: DynamicItemDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(DynamicItemConfigService) private config: DynamicItemConfig) { }

  ngOnInit() {
    this.loadComponent()
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.getType());

    let viewContainerRef = this.itemHost.viewContainerRef;

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicItem>componentRef.instance).attribute = this.attribute;
  }

  getType(): Type<any> {
    let found = this.config.mapping.find(key => key.name == this.attribute.type)

    this.validate(found);

    return found.component
  }

  private validate(found: DynamicItemMapping) {
    if (!found && this.attribute && this.attribute.type) {
      throw new Error(`The ${this.attribute.type} was not configured.`);
    }
    else if (!found && this.attribute && !this.attribute.type) {
      throw new Error(`The attribute ${this.attribute.key} doesn't have a type.`);
    }
    else if (!this.attribute) {
      throw new Error(`The attribute cannot be null.`);
    }
  }
}