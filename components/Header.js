export class Header {
  constructor() {
    this.header = document.createElement("header");
  }

  render(anchor) {
    this.text = document.createElement("h1");
    this.text.innerText = "To Do List";
    this.text.style.fontWeight = 400;

    this.header.append(this.text);
    anchor.append(this.header);
  }
}
