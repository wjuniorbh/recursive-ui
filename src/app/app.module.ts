import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicModule } from './modules/dynamic/dynamic.module';
import { InputComponent } from './input/input.component';
import { DynamicItemConfig } from './modules/dynamic/model/dynamic-item-config';
import { SectionComponent } from './section/section.component';
import { SelectComponent } from './select/select.component';
import { ButtonComponent } from './button/button.component';

const dynamicItemConfig: DynamicItemConfig = {
  mapping: [
    { name: 'text', component: InputComponent},
    { name: 'number', component: InputComponent },
    { name: 'collection', component: SelectComponent },
    { name: 'section', component: SectionComponent },
    { name: 'button', component: ButtonComponent }
  ]
}

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SectionComponent,
    SelectComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DynamicModule.forRoot(dynamicItemConfig)
  ],
  providers: [],
  entryComponents: dynamicItemConfig.mapping.map(m => m.component),
  bootstrap: [AppComponent]
})
export class AppModule { }
