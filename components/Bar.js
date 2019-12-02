export class Bar {
    constructor() {
        this.barElement = document.createElement("table");
        this.tabListElement = document.createElement("tr");

        this.unfinishedTabElement = document.createElement("td");
        this.unfinishedTabElement.innerText = "unfinished";

        this.finishedTabElement = document.createElement("td");
        this.finishedTabElement.innerText = "finished";

        this.allTabElement = document.createElement("td");
        this.allTabElement.innerText = "all";
    }

    get bar() {
        
        this.tabListElement.append(this.unfinishedTabElement, this.finishedTabElement, this.allTabElement);

        this.barElement.append(this.tabListElement);

        return this.barElement;
    }
}