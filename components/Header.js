export class Header {
  constructor(element) {
    this.header = document.createElement("h1");
    this.anchor = element;
  }

  render() {
    this.header.innerText = "To Do List";
    this.header.style.fontWeight = 400;

    this.anchor.append(this.header);
  }
}
