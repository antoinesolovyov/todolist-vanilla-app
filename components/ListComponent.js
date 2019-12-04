import { ItemComponent } from "./ItemComponent.js";

export class ListComponent {
  constructor(anchor) {
    this.list = document.createElement("table");
    this.items = {};

    let keys = Object.keys(localStorage);

    for(let key of keys) {
        let item = JSON.parse(localStorage.getItem(key));
        console.log(item);
        this.items[key] = new ItemComponent(item);
    }

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
