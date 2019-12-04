import { BarComponent } from "./BarComponent.js";
import { ListComponent } from "./ListComponent.js";

export class TableComponent {
  constructor(anchor) {
    this.table = document.createElement("div");
    this.table.style.border = "2px solid black";

    this.barAnchor = document.createElement("div");
    this.listAnchor = document.createElement("div");

    this.table.append(this.barAnchor, this.listAnchor);

    this.bar = new BarComponent(this.barAnchor);
    this.list = new ListComponent(this.listAnchor);

    this.anchor = anchor;
  }

  render() {
    this.bar.render();

    if (this.bar.isUnfinished) {
      this.list.render(1);
    } else if (this.bar.isFinished) {
      this.list.render(2);
    } else {
      this.list.render(3);
    }

    this.anchor.append(this.table);
  }
}
