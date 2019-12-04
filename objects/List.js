import { Item } from "./Item.js";

export class List {
    constructor() {
        this.list = [];
    }

    getUnfinishedList() {

        this.list = [];
        let keys = Object.keys(localStorage);

        for(let key of keys) {
            let item = JSON.parse(localStorage.getItem(key));
            if (!item.isFinished) {
                this.list.push(new Item(item.id, item.task, item.isFinished));
            }
        }

        return this.list;
    }
}