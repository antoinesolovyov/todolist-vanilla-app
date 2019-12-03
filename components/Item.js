export class Item {
  constructor(task) {
    // create item elements
    this._item = document.createElement("tr");
    this._checkbox = document.createElement("td");
    this._task = document.createElement("td");
    this._task.innerText = task;
    this._delete = document.createElement("td");

    this._id = Date.now();
    this._isFinished = false;
  }

  get id() {
    return this._id;
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
    // set item style
    this._checkbox.className = "checkbox";
    this._task.className = "task";
    this._delete.className = "delete";

    // append
    this._item.append(this._checkbox, this._task, this._delete);

    // return
    return this._item;
  }

  set item(task) {
    this._item.innerText = task;
  }

  get isFinished() {
    return this._isFinished;
  }

  set isFinished(flag) {
    this._isFinished = flag;
  }
}
