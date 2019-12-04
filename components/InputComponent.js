export class InputComponent {
  constructor(anchor) {
    this.form = document.createElement("form");
    this.input = document.createElement("input");
    this.button = document.createElement("button");
    this.anchor = anchor;

    this.input.placeholder = "What needs to be done?";

    this.form.append(this.input, this.button);
    this.anchor.append(this.form);
  }
}
