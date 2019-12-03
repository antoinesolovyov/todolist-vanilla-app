export class Input {
  constructor() {
    // create elements
    this._form = document.createElement("form");
    this._input = document.createElement("input");
    this._input.placeholder = "What needs to be done?";
    this._button = document.createElement("button");
  }

  get button() {
    return this._button;
  }

  get input() {
    return this._input;
  }

  render(anchor) {
    // append
    this._form.append(this._input, this._button);
    anchor.append(this._form);
  }
}
