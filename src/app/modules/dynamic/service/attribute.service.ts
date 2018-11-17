import { Injectable } from '@angular/core';
import { AttributeModel } from '../model/attribute.model';
import { OptionModel } from '../model/option.model';
import { TypeEnum } from '../model/type.enum';
import { OptionsEnum } from '../model/options.enum';
import { MaskEnum } from '../model/mask.enum';
import { SizeEnum } from '../model/size.enum';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
    findBy(key: string, attributes: AttributeModel[]): AttributeModel {
        if (attributes != undefined) {
            let attribute = attributes.find(a => a.key == key)
    
            if (attribute != undefined) {
                return attribute
            } else {
                for (let child of attributes) {
                    let found = this.findBy(key, child.attributes)
    
                    if (found != undefined) {
                        return found
                    }
                }
            }
        }
    }

    findBrothersBy(type: TypeEnum, pai: AttributeModel) : AttributeModel[] {
        let irmaos: AttributeModel[] = []
        let found = false

        if(!pai) {
            return irmaos
        }

        for (let child of pai.attributes) {
            if(child.type == type) {
                irmaos.push(child)
                found = true
            } else if (!found) {
                irmaos = this.findBrothersBy(type, pai = child)
            }
        }

        return irmaos
    }

    isRequired(attribute: AttributeModel): boolean {
        let obrigatoriedade = this.getOptionBy(attribute, OptionsEnum.required)

        return obrigatoriedade != null
    }

    isEditable(attribute: AttributeModel): boolean {
      
        if (attribute.value == null) return true;
        let editable = this.getOptionBy(attribute, OptionsEnum.editable)

        return editable == null ||
            (editable != null && editable.value == TypeEnum.yes)
    }

    getImageUri(attribute: AttributeModel): string {
        let imagem = this.getOptionBy(attribute, OptionsEnum.image)
        if (imagem != null)
            return imagem.value;
    }

    getMask(attribute: AttributeModel): string {
        let mascara = this.getOptionBy(attribute, OptionsEnum.mask)

        if (mascara != null) {
            switch (mascara.value) {
                case "Cnpj": {
                    return MaskEnum.cnpj;
                }
                case "Cpf": {
                    return MaskEnum.cpf;
                }
                case "Cep": {
                    return MaskEnum.cep;
                }
                case "Telefone": {
                    return MaskEnum.phone;
                }
                case "Decimal": {
                    return MaskEnum.decimal;
                }
                case "Percentual": {
                    return MaskEnum.percent;
                }
                default: {
                    return "";
                }
            }
        }
        return ""
    }

    getOptionBy(attribute: AttributeModel, key: string): OptionModel {
        if(attribute.options) {
            return attribute.options.find(a => a.key.toLowerCase() == key.toLowerCase())
        }
    }

    isGroup(attribute: AttributeModel): boolean {
        switch (attribute.type) {
            case "Agrupador":
            case "TituloAgrupador":
                return true;
            default:
                return false;
        }
    }

    isDynamicGroup(attribute: AttributeModel): boolean {
        return attribute.type == TypeEnum.dynamicGroup
    }

    copyWithoutValue(attribute: AttributeModel): AttributeModel {
        let novo = this.copyBase(attribute)
        novo.value = null
        
        if(attribute.attributes) {
            attribute.attributes.forEach(a => {
                novo.attributes.push(this.copyWithoutValue(a))
            })
        }

        if(attribute.options) {
            attribute.options.forEach(a => {
                novo.options.push(this.copyOption(a))
            })
        }        
        
        return novo
    }

    copy(attribute: AttributeModel): AttributeModel {
        let novo = this.copyBase(attribute)

        if(attribute.attributes) {
            attribute.attributes.forEach(a => {
                novo.attributes.push(this.copy(a))
            })
        }
        
        if(attribute.options) {
            attribute.options.forEach(a => {
                novo.options.push(this.copyOption(a))
            })
        }
        return novo
    }

    private copyBase(attribute: AttributeModel): AttributeModel {
        let novo = new AttributeModel()
        novo.key = attribute.key
        novo.type = attribute.type
        novo.value = attribute.value
        return novo
    }

    private copyOption(option: OptionModel): OptionModel {
        let novo = new OptionModel()
        novo.key = option.key
        novo.type = option.type
        novo.value = option.value
        return novo
    }

    withoutValues(attribute: AttributeModel): boolean {
        if (attribute.value != undefined && attribute.value != "") {
            return false
        } else if(attribute.attributes) {
            for (const child of attribute.attributes) {
                if (!this.withoutValues(child)) {
                    return false
                }
            }
        }
        return true
    }

    getSize(attribute: AttributeModel): string {
        let tamanho = this.getOptionBy(attribute, OptionsEnum.size)

        if (tamanho != null) {
            switch (tamanho.value) {
                case "Pequeno": {
                    return SizeEnum.small;
                }
                case "Medio": {
                    return SizeEnum.mid;
                }
                default: {
                    return "col-md-6";
                }
            }
        }
        return "col-md-6";
    }
}