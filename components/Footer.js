export class Footer {
    constructor() {
        this.footer = document.createElement("footer");
    }

    render(anchor) {
        
        this.text = document.createElement("h6");
        this.text.innerText = "Create by Anton Solovyov";
        this.text.style.fontWeight = 160;

        this.footer.append(this.text);
        anchor.append(this.footer);
    }
}