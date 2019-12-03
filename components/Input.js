export class Input {
  constructor(anchor) {
    this._form = document.createElement("form");
    this._input = document.createElement("input");
    this._button = document.createElement("button");
    this._anchor = anchor;

    this._input.placeholder = "What needs to be done?";

    this._form.append(this._input, this._button);
    this._anchor.append(this._form);
  }

  get button() {
    return this._button;
  }

  get value() {
    return this._input.value;
  }

  set value(value) {
    this._input.value = value;
  }
}
