export class Input {
    constructor() {
        this.form = document.createElement("form");

        this.input = document.createElement("input");
        this.button = document.createElement("button");
    }

    render(anchor) {
        

        this.form.append(this.input, this.button);
        anchor.append(this.form);
    }
}