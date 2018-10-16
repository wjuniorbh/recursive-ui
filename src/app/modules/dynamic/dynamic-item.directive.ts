import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-dynamic-item]'
})
export class DynamicItemDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}