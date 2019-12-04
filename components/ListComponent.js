export class ListComponent {
  constructor(anchor) {
    this.list = document.createElement("table");
    this.items = {};
    this.count = 0;
    this.unfinishedCount = 0;
    this.finishedCount = 0;

    this.anchor = anchor;
  }
  
  render(flag) {

    this.list.innerHTML = "";

    if (flag == 1) {
      for (let key in this.items) {
        if (!this.items[key].isFinished) {
          this.list.append(this.items[key].itemElement);
        }
      }
    } else if (flag == 2) {
      for (let key in this.items) {
        if (this.items[key].isFinished) {
          this.list.append(this.items[key].itemElement);
        }
      }
    } else {
      for (let key in this.items) {
        this.list.append(this.items[key].itemElement);
      }
    }

    this.anchor.append(this.list);
  }
}
