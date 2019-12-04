import { BarComponent } from "./BarComponent.js";
import { ListComponent } from "./ListComponent.js";

export class TableComponent {
  constructor(anchor) {
    this.table = document.createElement("div");
    this.table.style.border = "2px solid black";

    this.bar = new BarComponent();
    this.list = new ListComponent();

    this.anchor = anchor;
  }

  render() {
    if (this.bar.isUnfinished) {
      this.table.append(this.bar.bar, this.list.unfinishedList);
    } else if (this.bar.isFinished) {
      this.table.append(this.bar.bar, this.list.finishedList);
    } else {
      this.table.append(this.bar.bar, this.list.allList);
    }

    this.anchor.append(this.table);
  }
}
