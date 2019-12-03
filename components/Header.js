export class Header {
  constructor(anchor) {
    this.header = document.createElement("h1");
    this.header.innerText = "To Do List";
    this.header.style.fontWeight = 400;

    anchor.append(this.header);
  }
}
