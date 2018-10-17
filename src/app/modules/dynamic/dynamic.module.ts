import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic.component';
import { DynamicItemConfig } from './model/dynamic-item-config';
import { DynamicItemConfigService } from './service/dynamic-item-config.service';
import { DynamicItemDirective } from './dynamic-item.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicComponent,
    DynamicItemDirective
  ],
  exports: [
    DynamicComponent
  ]
})
export class DynamicModule {
  static forRoot(config: DynamicItemConfig): ModuleWithProviders {
    return {
      ngModule: DynamicModule,
      providers: [
        {
          provide: DynamicItemConfigService,
          useValue: config
        }
      ]
    }
  }
}
