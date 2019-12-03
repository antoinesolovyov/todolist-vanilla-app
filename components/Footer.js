export class Footer {
  constructor(element) {
    this.footer = document.createElement("p");
    this.anchor = element;
  }

  render() {
    this.footer.innerText = "Create by Anton Solovyov";
    this.footer.style.fontWeight = 200;

    this.anchor.append(this.footer);
  }
}
