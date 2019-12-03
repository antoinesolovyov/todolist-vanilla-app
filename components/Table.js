import { Bar } from "./Bar.js";
import { List } from "./List.js";

export class Table {
  constructor(anchor) {
    this._table = document.createElement("div");
    this._table.style.border = "2px solid black";

    this._bar = new Bar();
    this._list = new List();

    this._anchor = anchor;
  }

  get table() {
    return this._table;
  }

  get bar() {
    return this._bar;
  }

  get list() {
    return this._list;
  }

  render() {
    if (this._bar.isUnfinished) {
      this._table.append(this._bar.bar, this._list.unfinishedList);
    } else if (this._bar.isFinished) {
      this._table.append(this._bar.bar, this._list.finishedList);
    } else {
      this._table.append(this._bar.bar, this._list.allList);
    }

    this._anchor.append(this._table);
  }
}
