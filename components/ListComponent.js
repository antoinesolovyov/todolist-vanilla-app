export class ListComponent {
  constructor() {
    this.list = document.createElement("table");
    this.items = {};
    this.count = 0;
    this.unfinishedCount = 0;
    this.finishedCount = 0;
  }

  addItem(item) {
    this.items[item.id] = item;
    this.count++;
    this.unfinishedCount++;
  }

  get finishedList() {
    this.list.innerHTML = "";

    for (let key in this.items) {
      if (this.items[key].isFinished) {
        this.list.append(this.items[key].item);
      }
    }

    return this.list;
  }

  get unfinishedList() {
    this.list.innerHTML = "";

    for (let key in this.items) {
      if (!this.items[key].isFinished) {
        this.list.append(this.items[key].item);
      }
    }

    return this.list;
  }

  get allList() {
    this.list.innerHTML = "";

    for (let key in this.items) {
      this.list.append(this.items[key].item);
    }

    return this.list;
  }
}
