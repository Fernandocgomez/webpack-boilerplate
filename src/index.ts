import { Validations } from './validations/validation.model';
import { ServerCall } from "./server-call/server-call";
import { Validator } from "./validator/validator";

const form = document.getElementById("commercial-lead-form") as HTMLFormElement;

const title = document.getElementById("title") as HTMLInputElement;
const titleFormat: RegExp = /^[0-9]*$/;
const titleError = document.getElementById('title-error') as HTMLDivElement;
const titleErrorMessage = "Only number are allowed";
const titleValidations: Validations = {
    maxLength: 5,
    format: titleFormat
}

const body = document.getElementById("body") as HTMLInputElement;
const bodyFormat: RegExp = /^[a-zA-Z]*$/;
const bodyError = document.getElementById('body-error') as HTMLDivElement;
const bodyErrorMsg: string = "Only letters are allows";
const bodyValidations: Validations = {
    maxLength: 10,
    format: bodyFormat
}


const validator = new Validator();
const http = new ServerCall();

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const isTitleValid: boolean = validator.isValid(titleValidations, title.value);
    const isBodyValid: boolean = validator.isValid(bodyValidations, body.value);

    if(isTitleValid && isBodyValid) {
        const payload = {
            title: title.value,
            body: body.value
        }
        
        http.get(payload).then((json) => console.log(json));
    }
});

title.addEventListener("input", (e: Event) => {
    title.value = validator.maxLength(5, title.value);

    if (validator.format(titleFormat, title.value) || title.value === "") {
        titleError.style.display = "none";
    } else {
        titleError.innerText = titleErrorMessage;
        titleError.style.display = "block";
    }

});

body.addEventListener('input', (e: Event) => {
    body.value = validator.maxLength(5, body.value);

    if (validator.format(bodyFormat, body.value) || body.value === "") {
        bodyError.style.display = "none";
    } else {
        bodyError.innerText = bodyErrorMsg;
        bodyError.style.display = "block";
    }
});