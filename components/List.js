export class List {
  constructor() {
    this._list = document.createElement("table");
    this._items = {};
    this._count = 0;
  }

  get items() {
    return this._items;
  }

  get count() {
    return this._count;
  }

  set count(count) {
    this._count = count;
  }

  get list() {
    this._list.innerHTML = "";

    for (let key in this._items) {
      this._list.append(this._items[key].item);
    }

    return this._list;
  }
}
