export class List {
  constructor() {
    this._list = document.createElement("table");
    this._items = {};
    this._count = 0;
    this._unfinishedCount = 0;
    this._finishedCount = 0;
  }

  addItem(item) {
    this._items[item.id] = item;
    this._count++;
    this._unfinishedCount++;
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

  get unfinishedCount() {
    return this._unfinishedCount;
  }

  set unfinishedCount(unfinishedCount) {
    this._unfinishedCount = unfinishedCount;
  }

  get finishedCount() {
    return this._finishedCount;
  }

  set finishedCount(finishedCount) {
    this._finishedCount = finishedCount;
  }

  get finishedList() {
    this._list.innerHTML = "";

    for (let key in this._items) {
      if (this._items[key].isFinished) {
        this._list.append(this._items[key].item);
      }
    }

    return this._list;
  }

  get unfinishedList() {
    this._list.innerHTML = "";

    for (let key in this._items) {
      if (!this._items[key].isFinished) {
        this._list.append(this._items[key].item);
      }
    }

    return this._list;
  }

  get allList() {
    this._list.innerHTML = "";

    for (let key in this._items) {
      this._list.append(this._items[key].item);
    }

    return this._list;
  }
}
