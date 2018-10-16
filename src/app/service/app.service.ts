import { Injectable } from '@angular/core';
import { AttributeModel } from '../modules/dynamic/model/attribute.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getElements(): AttributeModel[] {
    let attr: AttributeModel = {
      key: 'Basic',
      type: 'section',
      attributes: [
        {
          key: 'Name',
          type: 'text'
        },
        {
          key: 'Age',
          type: 'number'
        },
        {
          key: 'Marital Status',
          type: 'collection',
          attributes: [
            {
              key: 'Single',
              type: 'option'
            },
            {
              key: 'Maried',
              type: 'option'
            },
            {
              key: 'Divorced',
              type: 'option'
            }
          ]
        }
      ]
    }

    return [attr]
  }
}
