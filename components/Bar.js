export class Bar {
  constructor() {
    // create bar elements
    this.barElement = document.createElement("table");
    this.tabListElement = document.createElement("tr");
    this.unfinishedTabElement = document.createElement("td");
    this.unfinishedTabElement.innerText = "Unfinished [ 5 ]";
    this.finishedTabElement = document.createElement("td");
    this.finishedTabElement.innerText = "Finished [ 0 ]";
    this.allTabElement = document.createElement("td");
    this.allTabElement.innerText = "All [ 5 ]";
  }

  get bar() {
    // set bar style
    this.barElement.style.padding = "0px";
    this.barElement.style.margin = "0px";
    this.barElement.style.width = 480 + "px";
    this.barElement.style.borderCollapse = "collapse";

    // set unfinished tab style
    this.unfinishedTabElement.style.width = 160 + "px";
    this.unfinishedTabElement.style.height = 48 + "px";
    this.unfinishedTabElement.style.textAlign = "center";
    this.unfinishedTabElement.style.borderBottom = "2px solid black";
    this.unfinishedTabElement.style.borderRight = "2px solid black";

    // set finished tab style
    this.finishedTabElement.style.width = 160 + "px";
    this.finishedTabElement.style.height = 48 + "px";
    this.finishedTabElement.style.textAlign = "center";
    this.finishedTabElement.style.borderBottom = "2px solid black";
    this.finishedTabElement.style.borderRight = "2px solid black";

    // set all tab style
    this.allTabElement.style.width = 160 + "px";
    this.allTabElement.style.height = 48 + "px";
    this.allTabElement.style.textAlign = "center";

    // append
    this.tabListElement.append(
      this.unfinishedTabElement,
      this.finishedTabElement,
      this.allTabElement
    );
    this.barElement.append(this.tabListElement);

    // return
    return this.barElement;
  }
}
