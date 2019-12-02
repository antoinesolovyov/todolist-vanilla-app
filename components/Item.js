export class Item {
    constructor() {
        this.itemElement = document.createElement("tr");

        this.checkboxElement = document.createElement("td");
        this.checkboxElement.innerText = "check";

        this.taskElement = document.createElement("td");
        this.taskElement.innerText = "task";

        this.deleteElement = document.createElement("td");
        this.deleteElement.innerText = "delete";
    }

    get item() {
        this.itemElement.append(this.checkboxElement, this.taskElement, this.deleteElement);

        return this.itemElement;
    }

    set item(task) {

    }
}