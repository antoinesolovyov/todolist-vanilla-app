import { Bar } from "./Bar.js";
import { List } from "./List.js";

// Table <- {Bar, List}

export class Table {
  constructor() {
    this.table = document.createElement("div");

    this.bar = new Bar();
    this.list = new List();
  }

  render(anchor) {
    // set table style
    this.table.style.border = "2px solid black";

    // append
    this.table.append(this.bar.bar, this.list.list);
    anchor.append(this.table);
  }
}
