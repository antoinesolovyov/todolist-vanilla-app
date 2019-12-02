export class Form {

    constructor() {
        this.login = "";
        this.password = "";

        this.form = document.createElement("form");

        this.form.style.display = "flex";
        this.form.style.flexDirection = "column";
        this.form.style.alignItems = "center";
        this.form.style.justifyContent = "center";
    }

    onSubmit() {
        /*
        let logpas = {};
        logpas.login = this.loginElement.value;
        logpas.password = this.passwordElement.value;

        let response = fetch('', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(logpas)
        });

        console.log(response);

        this.login = this.loginElement.value;
        this.password = this.passwordElement.value;

        console.log(this.login, this.password);
        */

        console.log(this.form.target);

        return false;
        
    }

    render(anchor) {

        // login element
        this.loginElement = document.createElement("input");
        this.loginElement.placeholder = "Login";
        this.loginElement.type = "text";

        // password element
        this.passwordElement = document.createElement("input");
        this.passwordElement.placeholder = "Password";
        this.passwordElement.type = "password";

        // separator "or" element
        this.separatorElement = document.createElement("p");
        this.separatorElement.innerText = "or";
        this.separatorElement.style.fontWeight = 160;

        // buttons
        this.signInElement = document.createElement("button");
        this.signInElement.innerText = "Sign In";

        this.signUpElement = document.createElement("button");
        this.signUpElement.innerText = "Sign Un";

        // append
        this.form.append(this.loginElement, this.passwordElement, this.signInElement, this.separatorElement, this.signUpElement)

        // add oclick method
        this.signInElement.onclick = () => {
            console.log("!");

            anchor.innerHTML = "";

            return false;
        };
    //    this.form.onsubmit = this.onSubmit.bind(this);

/*
        this.form.addEventListener("submit", () => {
            
            console.log("!");

            return false;
        });
*/
        anchor.append(this.form);
    }
}