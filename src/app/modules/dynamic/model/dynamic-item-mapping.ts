import { Type } from '@angular/core';

export interface DynamicItemMapping {
  name: string,
  component: Type<any>
}