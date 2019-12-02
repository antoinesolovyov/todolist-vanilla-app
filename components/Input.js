export class Input {
  constructor() {
    // create elements
    this.form = document.createElement("form");
    this.input = document.createElement("input");
    this.input.placeholder = "What needs to be done?";
    this.button = document.createElement("button");
  }

  render(anchor) {
    // set input style
    this.input.style.width = 420 + "px";
    this.input.style.height = 48 + "px";
    this.input.style.padding = "0px 0px 0px 12px";
    this.input.style.border = "none";
    this.input.style.outline = "none";
    this.input.style.fontSize = 16 + "px";
    this.input.style.fontWeight = 600;

    // set button style
    this.button.style.backgroundImage = "url('icons/arrow-icon.svg')";
    this.button.style.backgroundRepeat = "no-repeat";
    this.button.style.backgroundPosition = "center";
    this.button.style.width = 48 + "px";
    this.button.style.height = 48 + "px";
    this.button.style.padding = "0px";
    this.button.style.border = "none";
    this.button.style.outline = "none";

    // set form style
    this.form.style.display = "flex";
    this.form.style.border = "2px solid black";
    this.form.style.marginBottom = 16 + "px";

    // append
    this.form.append(this.input, this.button);
    anchor.append(this.form);
  }
}
