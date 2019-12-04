export class Item {
    constructor(task) {
        this.id = new Date();
        this.task = task;
        this.isFinished = false;
    }
}
