export class BarComponent {
  constructor(anchor) {
    this.bar = document.createElement("table");
    this.tabList = document.createElement("tr");
    this.unfinishedTab = document.createElement("td");
    this.unfinishedTab.className = "tab";
    this.finishedTab = document.createElement("td");
    this.finishedTab.className = "tab";
    this.allTab = document.createElement("td");
    this.allTab.className = "tab";
    this.allTab.style.borderRight = "none";

    this.unfinishedTab.addEventListener("click", () => {
      this.isUnfinished = true;
      this.isFinished = false;
      this.isAll = false;

      this.render();
    });

    this.finishedTab.addEventListener("click", () => {
      this.isUnfinished = false;
      this.isFinished = true;
      this.isAll = false;

      this.render();
    });

    this.allTab.addEventListener("click", () => {
      this.isUnfinished = false;
      this.isFinished = false;
      this.isAll = true;

      this.render();
    });

    this.isUnfinished = true;
    this.isFinished = false;
    this.isAll = false;

    this.tabList.append(this.unfinishedTab, this.finishedTab, this.allTab);
    this.bar.append(this.tabList);

    this.anchor = anchor;
  }

  render() {
    const borderBottom = "2px solid black";

    this.unfinishedTab.innerText = `Unfinished [ ${localStorage.length} ]`;
    this.finishedTab.innerText = `Finished [ ${localStorage.length} ]`;
    this.allTab.innerText = `All [ ${localStorage.length} ]`;

    if (this.isUnfinished) {
      this.unfinishedTab.style.borderBottom = "none";
      this.finishedTab.style.borderBottom = borderBottom;
      this.allTab.style.borderBottom = borderBottom;
    } else if (this.isFinished) {
      this.unfinishedTab.style.borderBottom = borderBottom;
      this.finishedTab.style.borderBottom = "none";
      this.allTab.style.borderBottom = borderBottom;
    } else if (this.isAll) {
      this.unfinishedTab.style.borderBottom = borderBottom;
      this.finishedTab.style.borderBottom = borderBottom;
      this.allTab.style.borderBottom = "none";
    }

    this.anchor.append(this.bar);
  }
}
