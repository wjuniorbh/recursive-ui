import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicComponent
  ],
  exports: [
    DynamicComponent
  ]
})
export class DynamicModule { }
