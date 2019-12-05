export class InputComponent {
    constructor(anchor) {
        this.input = document.createElement("input");
        this.input.placeholder = "What needs to be done?";
        this.button = document.createElement("button");
        this.form = document.createElement("form");
        this.form.append(this.input, this.button);

        this.anchor = anchor;
    }

    render() {
        this.anchor.append(this.form);
    }
}
