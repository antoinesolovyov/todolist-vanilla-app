import { Item } from "./Item.js";

const list = [];

// List <- { Item }

export class List {
  constructor() {
    this.listElement = document.createElement("table");
  }

  get list() {
    this.listElement.style.padding = "0px";
    this.listElement.style.margin = "0px";
    this.listElement.style.width = 480 + "px";
    this.listElement.style.borderCollapse = "collapse";
    this.listElement.style.borderTop = "none";

    for (let i = 0; i < 5; i++) {
      const item = new Item();
      this.listElement.append(item.item);
    }

    return this.listElement;
  }
}
