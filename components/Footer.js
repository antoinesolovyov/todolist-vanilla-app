export class Footer {
  constructor() {
    this.footer = document.createElement("footer");
  }

  render(anchor) {
    this.text = document.createElement("p");
    this.text.innerText = "Create by Anton Solovyov";
    this.text.style.fontWeight = 200;

    this.footer.append(this.text);
    anchor.append(this.footer);
  }
}
