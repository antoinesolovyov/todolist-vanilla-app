export class ItemComponent {
  constructor(task) {
    this.checkbox = document.createElement("td");
    this.checkbox.className = "checkbox";
    this.task = document.createElement("td");
    this.task.innerText = task;
    this.task.className = "task";
    this.delete = document.createElement("td");
    this.delete.className = "delete";

    this.item = document.createElement("tr");
    this.item.append(this.checkbox, this.task, this.delete);

    this.id = Date.now();
    this.isFinished = false;
  }
}
