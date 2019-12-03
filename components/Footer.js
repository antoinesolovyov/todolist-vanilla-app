export class Footer {
  constructor(anchor) {
    this.footer = document.createElement("p");
    this.footer.innerText = "Created by Anton Solovyov";
    this.footer.style.fontWeight = 200;

    anchor.append(this.footer);
  }
}
