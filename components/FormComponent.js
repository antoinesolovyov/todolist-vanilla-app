export class FormComponent {
    constructor(anchor) {
        this.login = "";
        this.password = "";

        this.loginElement = document.createElement("input");
        this.loginElement.type = "text";
        this.loginElement.placeholder = "Login";
        this.passwordElement = document.createElement("input");
        this.passwordElement.type = "password";
        this.passwordElement.placeholder = "Password";

        this.separatorElement = document.createElement("p");
        this.separatorElement.innerText = "- or -";

        this.signInElement = document.createElement("button");
        this.signInElement.innerText = "Sign In";
        this.signInElement.className = "signIn";
        this.signUpElement = document.createElement("button");
        this.signUpElement.innerText = "Sign Up";
        this.signUpElement.className = "signUp";

        this.form = document.createElement("form");
        this.form.className = "authForm";
        this.form.append(
            this.loginElement,
            this.passwordElement,
            this.signInElement,
            this.separatorElement,
            this.signUpElement
        );

        this.form.onsubmit = this.onSubmit.bind(this);

        this.anchor = anchor;
    }

    onSubmit() {
        const colorRed = "red";
        const colorGreen = "green";

        let flag = false;

        if (this.loginElement.value === "") {
            this.loginElement.style.borderColor = colorRed;
            flag = false;
        } else {
            this.loginElement.style.borderColor = colorGreen;
            this.login = this.loginElement.value;
        }

        if (this.passwordElement.value === "") {
            this.passwordElement.style.borderColor = colorRed;
            flag = false;
        } else {
            this.passwordElement.style.borderColor = colorGreen;
            this.password = this.passwordElement.value;
        }

        if (flag) {
            document.body.innerHTML = "";
        }
        
        console.log(this.login, this.password);

        return flag;
    }

    render() {
        this.anchor.append(this.form);
    }
}
