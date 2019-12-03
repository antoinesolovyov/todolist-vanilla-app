export class Bar {
  constructor() {
    // create bar elements
    this._bar = document.createElement("table");
    this._tabList = document.createElement("tr");
    this._unfinished = document.createElement("td");
    this._unfinished.innerText = "Unfinished [ 0 ]";
    this._finished = document.createElement("td");
    this._finished.innerText = "Finished [ 0 ]";
    this._all = document.createElement("td");
    this._all.innerText = "All [ 0 ]";
  }

  set unfinishedCount(count) {
    this._unfinished.innerText = `Unfinished [ ${count} ]`;
  }

  set finishedCount(count) {
    this._finished.innerText = `Finished [ ${count} ]`;
  }

  set allCount(count) {
    this._all.innerText = `All [ ${count} ]`;
  }

  get bar() {
    this._unfinished.style.borderRight = "2px solid black";
    this._finished.style.borderRight = "2px solid black";
    this._finished.style.borderBottom = "2px solid black";
    this._all.style.borderBottom = "2px solid black";

    // set tabs style
    this._unfinished.className = "tab";
    this._finished.className = "tab";
    this._all.className = "tab";

    // append
    this._tabList.append(this._unfinished, this._finished, this._all);
    this._bar.append(this._tabList);

    // return
    return this._bar;
  }
}
