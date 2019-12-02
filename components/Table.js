import { Bar } from "./Bar.js";
import { List } from "./List.js";

// Table <- {Bar, List}

export class Table {

    constructor() {
        this.bar = new Bar();
        this.list = new List();
    }


    render(anchor) {

        anchor.append(this.bar.bar, this.list.list);
    }
}