export class Input {
  constructor() {
    // create elements
    this.form = document.createElement("form");
    this.input = document.createElement("input");
    this.input.placeholder = "What needs to be done?";
    this.button = document.createElement("button");
  }

  render(anchor) {
    // append
    this.form.append(this.input, this.button);
    anchor.append(this.form);
  }
}
