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
    // set tabs style
    this.unfinishedTabElement.className = "tab";
    this.finishedTabElement.className = "tab";
    this.allTabElement.className = "tab";

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
