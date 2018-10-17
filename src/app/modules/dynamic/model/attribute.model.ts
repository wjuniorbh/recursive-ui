import { OptionModel } from "./option.model";

export class AttributeModel {
    key: string
    value?: string
    type: string
    options?: OptionModel[]
    attributes?: AttributeModel[]
}