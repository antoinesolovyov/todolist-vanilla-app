export class Form {
    constructor() {
        this.login = "";
        this.password = "";

        this.form = document.createElement("form");
    }

    onSubmit() {
        let logpas = {};
        logpas.login = this.loginElement.value;
        logpas.password = this.passwordElement.value;

        let response = fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(logpas)
        });

        console.log(response);

        this.login = this.loginElement.value;
        this.password = this.passwordElement.value;

        console.log(this.login, this.password);

        return false;
    }

    render(anchor) {
        this.loginElement = document.createElement("input");
        this.passwordElement = document.createElement("input");

        this.separatorElement = document.createElement("p");

        this.signInElement = document.createElement("button");
        this.signUpElement = document.createElement("button");

        this.form.append(
            this.loginElement,
            this.passwordElement,
            this.signInElement,
            this.separatorElement,
            this.signUpElement
        );

        this.signInElement.innerText = "submit";

        this.form.onsubmit = this.onSubmit.bind(this);

        let counter = 0;

        /*
        this.form.addEventListener("submit", () => {
            
            console.log("!");

            return false;
        });
*/
        anchor.append(this.form);
    }
}

// FORM CREATE

const form = document.createElement("form");

form.onsubmit = onSubmit;
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.justifyContent = "center";

// INPUTS CREATE

const loginInput = document.createElement("input");
const passwordInput = document.createElement("input");

//loginInput.attachShadow({mode: "open"});

loginInput.placeholder = "Login";
loginInput.type = "text";
setInputStyles(loginInput.style);

passwordInput.placeholder = "Password";
passwordInput.type = "password";
setInputStyles(passwordInput.style);

addMouseOverListener(loginInput);
addFocusInListener(loginInput);
addFocusOutListener(loginInput);

addMouseOverListener(passwordInput);
addFocusInListener(passwordInput);
addFocusOutListener(passwordInput);

// BUTTONS CREATE
const signInButton = document.createElement("button");
const signUpButton = document.createElement("button");

signInButton.textContent = "Sign In";
signInButton.type = "submit";

signUpButton.textContent = "Sign Up";
signUpButton.type = "submit";

setButtonStyles(signInButton.style, "black", "white");
setButtonStyles(signUpButton.style, "white", "black");

document.body.append(header, form, footer);
form.append(loginInput, passwordInput, signInButton, p, signUpButton);

// ADD BUTTONS LISTENERS

function inputHandler() {
    this.style.border = "none";
    this.style.borderBottom = "2px solid black";
    this.focus();
}

function addMouseOverListener(input) {
    input.addEventListener("mouseover", inputHandler);
}

function addFocusInListener(input) {
    input.addEventListener("focusin", inputHandler);
}

function addFocusOutListener(input) {
    input.addEventListener("focusout", () => {
        input.style.border = "2px solid black";
    });
}

// SET INPUTS AND BUTTONS STYLES

function setInputStyles(inputStyle) {
    inputStyle.width = inputWidth + "px";
    inputStyle.height = inputHeight + "px";
    inputStyle.margin = elementsMargin + "px";
    inputStyle.padding = "0px 0px 0px 16px";
    inputStyle.border = "2px solid black";
    inputStyle.fontWeight = "bold";
    inputStyle.fontSize = fontSize + "px";
    inputStyle.fontFamily = "roboto";
    inputStyle.outline = "none";
}

function setButtonStyles(buttonStyle, backgroundColor, color) {
    buttonStyle.width = buttonWidth + "px";
    buttonStyle.height = buttonHeight + "px";
    buttonStyle.margin = elementsMargin + "px";
    buttonStyle.border = "2px solid black";
    buttonStyle.fontWeight = "bold";
    buttonStyle.fontSize = fontSize + "px";
    buttonStyle.fontFamily = "roboto";
    buttonStyle.backgroundColor = backgroundColor;
    buttonStyle.color = color;
    buttonStyle.outline = "none";
}

// ONSUBMIT FUNCTION

function onSubmit() {
    let flag = true;

    if (loginInput.value === "") {
        loginInput.style.borderColor = colorRed;
        flag = false;
    } else {
        loginInput.style.borderColor = colorGreen;
    }

    if (passwordInput.value === "") {
        passwordInput.style.borderColor = colorRed;
        flag = false;
    } else {
        passwordInput.style.borderColor = colorGreen;
    }

    if (flag) {
        document.body.innerHTML = "";

        f();
    }

    return flag;
}
