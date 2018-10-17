import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicModule } from './modules/dynamic/dynamic.module';
import { DynamicItemDirective } from './modules/dynamic/dynamic-item.directive';
import { InputComponent } from './input/input.component';
import { DynamicItemConfig } from './modules/dynamic/model/dynamic-item-config';
import { SectionComponent } from './section/section.component';
import { SelectComponent } from './select/select.component';

const dynamicItemConfig = new DynamicItemConfig()
dynamicItemConfig.addMap('text', InputComponent)
dynamicItemConfig.addMap('number', InputComponent)
dynamicItemConfig.addMap('collection', SelectComponent)
dynamicItemConfig.addMap('section', SectionComponent)

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SectionComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DynamicModule.forRoot(dynamicItemConfig)
  ],
  providers: [],
  entryComponents: dynamicItemConfig.getTypes(),
  bootstrap: [AppComponent]
})
export class AppModule { }
