import { Input } from "@angular/core";
import { AttributeModel } from "./model/attribute.model";
import { AttributeService } from "./service/attribute.service";

export abstract class DynamicItem {
    @Input() attribute: AttributeModel
    @Input() section: AttributeModel
    @Input() parent: AttributeModel
    helper: AttributeService
  
    constructor() {
      this.helper = new AttributeService()
    }

    getMask(): string {
      return new AttributeService().getMask(this.attribute)
    }
  
    getComponentType(): string {
        switch (this.attribute.type) {
        case "text": {
          return "text"
        }
        case "booleanConditional":
        case "boolean": {
          return "checkbox"
        }
        case "booleanExclusive":{
          return "radio"
        }
        case "integer":
        case "decimal":
        case "percentage": {
          return "number"
        }
        case "collection": {
          return "select"  
        }
        default: {
          return "text"
        }
      }
    }
  
    isCondicional() {
      return this.attribute.type == "booleanConditional"
    }
  
    isSelect() {
      return this.getComponentType() == "select"
    }
  
    isInput() {
      switch (this.attribute.type) {
        case "text":
        case "integer":
        case "percent":
        case "decimal": {
          return true
        }
        default: {
          return false
        }
      }
    }
  
    isCheckbox() {
      switch (this.attribute.type) {
        case "boolean":
        case "booleanConditional": {
          return true
        }
        default: {
          return false
        }
      }
    }
  
    isRadioButton(){
        return this.attribute.type == "booleanExclusive";
    }
  
    getOptionsSelect() {
        if (this.getComponentType() == "select") {
            return this.attribute.attributes;
        }
    }
  
    isChecked(): boolean {
        return this.attribute.value == "yes";
    }
  
    onChangedSelect(value: string) {
        this.attribute.value = value;
    }
  
    onChanged(checked: boolean) {
        this.attribute.value = (checked === true) ? "yes" : "no";
    }
  
    onChangedExclusiva(checked: boolean) {
        for (const irmao of this.parent.attributes) {
          irmao.value = "no";
        }
        this.attribute.value = (checked === true) ? "yes" : "no";
    }
  
    hasError(campo: string): boolean {
        //let validacoes = this.validacaoService.getValidation();
        //let validacao = validacoes.find(v => v.campoComErros == campo && v.secaoComErros == this.secao)
    
        //return (validacao != undefined)
        return false
    }
  
    isRequired(): boolean{
        return  this.helper.isRequired(this.attribute)
    }
  
    isDisabled(): boolean {
        return !this.helper.isEditable(this.attribute)
    }
}