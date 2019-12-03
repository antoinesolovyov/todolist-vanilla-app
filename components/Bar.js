export class Bar {
  constructor() {
    this._bar = document.createElement("table");
    this._tabList = document.createElement("tr");
    this._unfinished = document.createElement("td");
    this._unfinished.innerText = "Unfinished [ 0 ]";
    this._unfinished.className = "tab";
    this._finished = document.createElement("td");
    this._finished.innerText = "Finished [ 0 ]";
    this._finished.className = "tab";
    this._all = document.createElement("td");
    this._all.innerText = "All [ 0 ]";
    this._all.className = "tab";
    this._all.style.borderRight = "none";

    this.isUnfinished = true;
    this.isFinished = false;
    this.isAll = false;

    this._tabList.append(this._unfinished, this._finished, this._all);
    this._bar.append(this._tabList);
  }

  set unfinishedTabText(count) {
    this._unfinished.innerText = `Unfinished [ ${count} ]`;
  }

  set finishedTabText(count) {
    this._finished.innerText = `Finished [ ${count} ]`;
  }

  set allTabText(count) {
    this._all.innerText = `All [ ${count} ]`;
  }

  get unfinished() {
    return this._unfinished;
  }

  get finished() {
    return this._finished;
  }

  get all() {
    return this._all;
  }

  get bar() {
    const borderBottom = "2px solid black";

    if (this.isUnfinished) {
      this._unfinished.style.borderBottom = "none";
      this._finished.style.borderBottom = borderBottom;
      this._all.style.borderBottom = borderBottom;
    } else if (this.isFinished) {
      this._unfinished.style.borderBottom = borderBottom;
      this._finished.style.borderBottom = "none";
      this._all.style.borderBottom = borderBottom;
    } else if (this.isAll) {
      this._unfinished.style.borderBottom = borderBottom;
      this._finished.style.borderBottom = borderBottom;
      this._all.style.borderBottom = "none";
    }

    return this._bar;
  }
}
