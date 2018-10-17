import { DynamicItemMapping } from "./dynamic-item-mapping";
import { Type } from "@angular/core";

export class DynamicItemConfig {
    mapping: DynamicItemMapping[]

    constructor() {
        this.mapping = []
    }

    addMap(name: string, component: Type<any>) {
        this.mapping.push({name: name, component: component})
    }

    getTypes(): Type<any>[] {
        return Array.from(new Set(this.mapping.map(itemMap => itemMap.component)))
    }
}