import { Input, Output, EventEmitter } from "@angular/core";
import { AttributeModel } from "./model/attribute.model";
import { AttributeService } from "./service/attribute.service";
import { OptionModel } from "./model/option.model";

export abstract class DynamicItem {
    @Input() attribute: AttributeModel
    @Input() section: AttributeModel
    @Input() parent: AttributeModel
    @Input() envOptions: OptionModel[] = []
    @Output() onEmit: EventEmitter<any> = new EventEmitter()
    helper: AttributeService
  
    constructor() {
      this.helper = new AttributeService()
    }

    emit(anEvent: any) {
      this.onEmit.emit(anEvent)
    }

    getMask(): string {
      return new AttributeService().getMask(this.attribute)
    }
      
    isRequired(): boolean{
        return  this.helper.isRequired(this.attribute)
    }
}