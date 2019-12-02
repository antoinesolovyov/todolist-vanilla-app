export class Item {
  constructor() {
    // create item elements
    this.itemElement = document.createElement("tr");
    this.checkboxElement = document.createElement("td");
    this.taskElement = document.createElement("td");
    this.taskElement.innerText = "What needs to be done?";
    this.deleteElement = document.createElement("td");
  }

  get item() {
    // set checkbox style
    this.checkboxElement.className = "checkbox";

    // set task style
    this.taskElement.className = "task";

    // set delete style
    this.deleteElement.className = "delete";

    // append
    this.itemElement.append(
      this.checkboxElement,
      this.taskElement,
      this.deleteElement
    );

    // return
    return this.itemElement;
  }

  set item(task) {}
}
