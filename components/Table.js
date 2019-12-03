import { Bar } from "./Bar.js";
import { List } from "./List.js";

export class Table {
  constructor() {
    this._table = document.createElement("div");

    this._bar = new Bar();
    this._list = new List();
  }

  get table() {
    return this._table;
  }

  get bar() {
    return this._bar;
  }

  get list() {
    return this._list;
  }Í

  render(anchor) {
    // set table style
    this._table.style.border = "2px solid black";

    // append
    this._table.append(this._bar.bar, this._list.list);
    anchor.append(this._table);
  }
}
