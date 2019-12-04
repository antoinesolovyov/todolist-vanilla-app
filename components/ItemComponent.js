export class ItemComponent {
  constructor(itemObject) {
    this.checkbox = document.createElement("td");
    this.checkbox.className = "checkbox";
    this.checkbox.style.backgroundImage = itemObject.backgroundImage;
    this.task = document.createElement("td");
    this.task.innerText = itemObject.task;
    this.task.style.textDecoration = itemObject.textDecoration;
    this.task.className = "task";
    this.delete = document.createElement("td");
    this.delete.className = "delete";

    this.itemElement = document.createElement("tr");
    this.itemElement.append(this.checkbox, this.task, this.delete);

    this.checkbox.addEventListener("click", () => {
      if (this.isFinished) {
        
        itemObject.textDecoration = "none";
        itemObject.backgroundImage = "url('icons/square-icon.svg')";
        itemObject.isFinished = false;

        localStorage.setItem(itemObject.id, JSON.stringify(itemObject));
      } else {
        itemObject.textDecoration = "line-through";
        itemObject.backgroundImage = "url('icons/check-square-icon.svg')";
        itemObject.isFinished = true;

        localStorage.setItem(itemObject.id, JSON.stringify(itemObject));
      }
    });

    this.itemElement.addEventListener("mouseleave", () => {
      this.delete.style.backgroundImage = "none";
    });

    this.itemElement.addEventListener("mouseenter", () => {
      this.delete.style.backgroundImage = "url('icons/x-icon.svg')";
    });

    // delete click event
    this.delete.addEventListener("click", () => {
      localStorage.removeItem(itemObject.id);
    });

    this.id = itemObject.id;
    this.isFinished = itemObject.isFinished;
  }

  render() {
    
  }
}
