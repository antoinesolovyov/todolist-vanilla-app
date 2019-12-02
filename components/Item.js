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
    this.checkboxElement.style.padding = "0px";
    this.checkboxElement.style.margin = "0px";
    this.checkboxElement.style.width = 48 + "px";
    this.checkboxElement.style.height = 48 + "px";
    this.checkboxElement.style.backgroundImage = "url('icons/square-icon.svg')";
    this.checkboxElement.style.backgroundRepeat = "no-repeat";
    this.checkboxElement.style.backgroundPosition = "center";

    // set task style
    this.taskElement.style.padding = "0px";
    this.taskElement.style.margin = "0px";
    this.taskElement.style.width = 384 + "px";
    this.taskElement.style.height = 48 + "px";

    // set delete style
    this.deleteElement.style.padding = "0px";
    this.deleteElement.style.margin = "0px";
    this.deleteElement.style.width = 48 + "px";
    this.deleteElement.style.height = 48 + "px";
    this.deleteElement.style.backgroundImage = "url('icons/x-icon.svg')";
    this.deleteElement.style.backgroundRepeat = "no-repeat";
    this.deleteElement.style.backgroundPosition = "center";

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
