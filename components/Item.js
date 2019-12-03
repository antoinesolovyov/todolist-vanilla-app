export class Item {
  constructor(task) {
    // create item elements
    this._checkbox = document.createElement("td");
    this._checkbox.className = "checkbox";
    this._task = document.createElement("td");
    this._task.innerText = task;
    this._task.className = "task";
    this._delete = document.createElement("td");
    this._delete.className = "delete";

    this._item = document.createElement("tr");
    this._item.append(this._checkbox, this._task, this._delete);

    this._id = Date.now();
    this._isFinished = false;
  }

  get checkbox() {
    return this._checkbox;
  }

  get task() {
    return this._task;
  }

  get delete() {
    return this._delete;
  }

  get item() {
    return this._item;
  }

  get id() {
    return this._id;
  }

  get isFinished() {
    return this._isFinished;
  }

  set isFinished(flag) {
    this._isFinished = flag;
  }
}
