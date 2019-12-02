import { Item } from "./Item.js";

const list = [];

// List <- { Item }

export class List {
    constructor() {
        this.listElement = document.createElement("table");
    }

    get list() {

        for (let i = 0; i < 5; i++) {
            const item = new Item();
            this.listElement.append(item.item);
        }
        
        return this.listElement;
    }
}